import React from 'react';
import { Link } from 'react-router-dom';



const Roommate = () => {
  const openGoogleForm = () => {
    window.open('https://forms.gle/P9JkTvxBuzajeTSF9', '_blank');
  };
  const navigateToMatch = () => { setShowMatch(true);  };

  return (
    <div>
      <header className="header">
        <h1>Roommate Finder</h1>
        <p>Find the perfect roommate with our advanced AI & ML algorithms! ✨</p>
      </header>
      <div className="text-content">
          <p>Looking for someone who matches your vibe? 🤝 Whether you're a night owl or an early bird, our platform has got you covered!</p>
        </div>
        <div className="button-container">
          <button onClick={openGoogleForm}>Fill the Form</button>
          <Link to="/match">
          <button>Generate Matches</button>
        </Link>
        </div>

      <section className="content">
        <div className="image-container">
        <img src="https://i.pinimg.com/736x/99/2f/6a/992f6ad2245f0587c396a4e0c03767b7.jpg" alt="Roommate Match 1" />
          <img src="https://i.pinimg.com/736x/d7/27/9b/d7279b8759088efa69e5a81e77975bc6.jpg" alt="Roommate Match 2" />
          <img src="https://i.pinimg.com/736x/91/f0/97/91f097a8f3f195d49acfa639281c7660.jpg" alt="Roommate Match 3" />
        </div>
        
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        body {
          font-family: 'Poppins', Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f0f4f8;
          animation: fadeIn 2s ease-in-out;
        }

        .header {
          background: linear-gradient(45deg, #99C1B9, #735eb9); 
          padding: 30px;
          text-align: center;
          color: white;
          animation: fadeIn 2s ease-in-out;
        }

        .header h1 {
          font-size: 2.5rem;
          margin: 0;
        }

        .header p {
          margin: 10px 0 0;
          font-size: 1.2rem;
        }

        .content {
          padding: 30px;
          animation: fadeIn 2s ease-in-out;
          text-align: center;
        }

        .image-container {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
          flex-wrap: wrap;
          animation: fadeIn 2s ease-in-out;
        }

        .image-container img {
          width: 100%;
          max-width: 300px;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          animation: pulse 3s infinite;
        }

        .text-content {
          margin-bottom: 20px;
          font-size: 1.1rem;
          color: #fff;
        }

        .button-container {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
          animation: fadeIn 2s ease-in-out;
        }

        button {
          padding: 12px 24px;
          font-size: 16px;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s, transform 0.3s;
        }

        button:hover {
          background: linear-gradient(135deg, #4e0cba, #1d62e5);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }

          .header p {
            font-size: 1rem;
          }

          .image-container {
            gap: 10px;
          }

          .text-content {
            font-size: 1rem;
          }

          button {
            padding: 10px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 1.5rem;
          }

          .header p {
            font-size: 0.9rem;
          }

          button {
            padding: 8px 16px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Roommate;
