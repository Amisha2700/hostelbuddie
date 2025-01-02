from flask import Flask, jsonify, request,render_template 
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os
import gspread
from google.oauth2.service_account import Credentials

load_dotenv()

app=Flask(__name__)

serviceAccount=os.getenv("FILE_PATH")
spreadsheetId=os.getenv("SPREADSHEET_ID")
rangeName=os.getenv("RANGE_NAME")

app.config["MONGO_URI"]=os.getenv('MONGO_URL')

mongo=PyMongo(app)

creds = Credentials.from_service_account_file(serviceAccount, scopes=["https://www.googleapis.com/auth/spreadsheets.readonly"])
client = gspread.authorize(creds)

def fetchData():
    spreadsheet = client.open_by_key(spreadsheetId)
    worksheet = spreadsheet.sheet1  
    data = worksheet.get_all_values()
    return data
    
def add(data):
    db = mongo.db
    collection = db["form_responses"]
    if data:
        headers = data[0] 
        rows = data[1:]
        documents = [dict(zip(headers, row)) for row in rows]
        for document in documents:
            if not(collection.find_one({"Timestamp":document["Timestamp"]})):
                collection.insert_one(document)
        print(f"Inserted {len(documents)} records into MongoDB.")
    else:
        print("No data found.")

# if __name__ == '__main__':
#     data = fetchData()
#     add(data)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/update', methods=['POST'])
def update():
    data = fetchData()
    result = add(data)
    return jsonify({"message": result})

#if(__name__=="__main__"):
    app.run(debug=True,port=8000)
