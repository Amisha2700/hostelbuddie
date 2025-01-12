// import React from 'react';

// const Match = ({ matches }) => {
//   return (
//     <div>
//       <header className="header">
//         <h1>Your Matches</h1>
//         <p>Here are the potential roommates we found for you!</p>
//       </header>

//       <section className="content">
//         <ul className="matches-list">
//           {matches.map((match, index) => (
//             <li key={index}>
//               <strong>Name:</strong> {match.Name} <br />
//               <strong>Year:</strong> {match.Year} <br />
//               <strong>Branch:</strong> {match.Branch} <br />
//               <strong>City:</strong> {match["Home city/town"]} <br />
//               <strong>Cleanliness:</strong> {match["What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)"]}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <style jsx>{`
//         .header {
//           background-color: #d686aa;
//           padding: 20px;
//           text-align: center;
//           color: white;
//         }

//         .content {
//           padding: 20px;
//         }

//         .matches-list {
//           list-style-type: none;
//           padding: 0;
//         }

//         .matches-list li {
//           background-color: #f8f8f8;
//           padding: 10px;
//           margin: 10px 0;
//           border-radius: 5px;
//           box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Match;


import React, { useState, useEffect } from "react";
import axios from "axios";

const MatchesPage = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch matches when the component loads
    const fetchMatches = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/find_matches", {
          sheet_url: "https://docs.google.com/spreadsheets/d/1LthSMETRap-PO-tuC5H2ycif27c7kzKnUUdwpGUCwz0/export?format=csv",
        });
        setMatches(response.data.slice(0, 5)); // Get the top 5 matches
      } catch {
        setError("Failed to fetch matches. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="matches-container">
      <header className="header">
        <h1>Your Top Roommate Matches</h1>
      </header>

      {loading ? (
        <p>Loading matches...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ul className="matches-list">
          {matches.map((match, index) => (
            <li key={index} className="match-item">
              <h3>{match.Name}</h3>
              <p><strong>Year:</strong> {match.YEAR}</p>
              <p><strong>Branch:</strong> {match.Branch}</p>
              <p><strong>City:</strong> {match["Home city/town"]}</p>
              <p>
                <strong>Cleanliness:</strong>{" "}
                {match["What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)"]}
              </p>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        .matches-container {
          padding: 20px;
          font-family: "Poppins", Arial, sans-serif;
          background-color: #f0f4f8;
          text-align: center;
        }

        .header {
          margin-bottom: 20px;
        }

        .matches-list {
          list-style: none;
          padding: 0;
        }

        .match-item {
          background: white;
          margin: 10px auto;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 400px;
        }

        .match-item h3 {
          margin: 0;
          color: #6a11cb;
        }

        .match-item p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default MatchesPage;


