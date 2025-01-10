from flask import Flask, request, jsonify
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Preprocessing Function
def preprocess(data):
    relevant_columns = [
        'Name','Gender', 'Year', 'Branch', 'Hosteller/Day scholar',
        'What are your food preferences?',
        'What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)',
        'Home city/town'
    ]
    return data[relevant_columns]

# Match Function
def get_matches(data, weighted_df, label_encoders, num_matches=5):
    recommendations = {}
    for idx, profile in weighted_df.iterrows():
        profile_df = profile.values.reshape(1, -1)
        scores = cosine_similarity(profile_df, weighted_df).flatten()
        scores[idx] = -1  # Exclude self
        top_indices = scores.argsort()[-num_matches:][::-1]
        original_names = label_encoders['Name'].inverse_transform(data.iloc[top_indices]['Name'])
        recommendations[label_encoders['Name'].inverse_transform([data.iloc[idx]['Name']])[0]] = data.iloc[top_indices][[
            'Name', 'Year', 'Branch', 'Gender',
            'What are your food preferences?', 'Home city/town',
            'What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)'
        ]].assign(Name=original_names).to_dict(orient="records")
    return recommendations

@app.route("/find_matches", methods=["POST"])
def find_matches():
    try:
        request_data = request.get_json()
        input_text = request_data.get("Name")

        if not input_text:
            return jsonify({"error": "Name is required"}), 400

        # Load and preprocess data
        data = pd.read_csv("https://docs.google.com/spreadsheets/d/1LthSMETRap-PO-tuC5H2ycif27c7kzKnUUdwpGUCwz0/export?format=csv")
        data = preprocess(data)

        # Encode and scale data
        label_encoders = {}
        for col in ['Name','Gender', 'Year', 'Home city/town', 'Hosteller/Day scholar', 'Branch', 
                     'What are your food preferences?']:
            if data[col].dtype == 'object':
                le = LabelEncoder()
                data[col] = le.fit_transform(data[col].astype(str))
                label_encoders[col] = le

        # Print the encoded names for debugging
        print("Encoded Names:", data['Name'].unique())

        # Check if the input name exists in the encoded names
        if input_text not in label_encoders['Name'].classes_:
            return jsonify({"error": f"Name '{input_text}' not found in the dataset"}), 404
        
        input_text_encoded = label_encoders['Name'].transform([input_text])[0]

        weights = {
            'Year': 900, 'Hosteller/Day scholar': 900, 'Branch': 2,
            'What are your food preferences?': 3,
            'What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)': 3,
            'Home city/town': 1, 'Gender':1000,
            'Name': 0  # Adding 'Name' to weights with 0 to include in weighted_df but not affect similarity
        }

        weighted_df = data.copy()
        for feature, weight in weights.items():
            weighted_df[feature] = data[feature] * weight

        scaler = StandardScaler()
        weighted_df['What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)'] = scaler.fit_transform(weighted_df[[
            'What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)'
        ]])

        # Get matches
        recommendations = get_matches(data, weighted_df, label_encoders)
        user_recommendations = recommendations.get(input_text)
        if not user_recommendations:
            return jsonify({"error": f"No matches found for user {input_text}"}), 404

        return jsonify(user_recommendations)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)