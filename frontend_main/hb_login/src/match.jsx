import React from 'react';

const Match = ({ matches }) => {
  return (
    <div>
      <header className="header">
        <h1>Your Matches</h1>
        <p>Here are the potential roommates we found for you!</p>
      </header>

      <section className="content">
        <ul className="matches-list">
          {matches.map((match, index) => (
            <li key={index}>
              <strong>Name:</strong> {match.Name} <br />
              <strong>Year:</strong> {match.Year} <br />
              <strong>Branch:</strong> {match.Branch} <br />
              <strong>City:</strong> {match["Home city/town"]} <br />
              <strong>Cleanliness:</strong> {match["What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)"]}
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{`
        .header {
          background-color: #d686aa;
          padding: 20px;
          text-align: center;
          color: white;
        }

        .content {
          padding: 20px;
        }

        .matches-list {
          list-style-type: none;
          padding: 0;
        }

        .matches-list li {
          background-color: #f8f8f8;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Match;
