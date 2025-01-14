// import React from 'react';
// import { Link } from 'react-router-dom';



// const Roommate = () => {
//   const openGoogleForm = () => {
//     window.open('https://forms.gle/P9JkTvxBuzajeTSF9', '_blank');
//   };
//   const navigateToMatch = () => { setShowMatch(true);  };

//   return (
//     <div>
//       <header className="header">
//         <h1>Roommate Finder</h1>
//         <p>Find the perfect roommate with our advanced AI & ML algorithms! ✨</p>
//       </header>
//       <div className="text-content">
//           <p>Looking for someone who matches your vibe? 🤝 Whether you're a night owl or an early bird, our platform has got you covered!</p>
//         </div>
//         <div className="button-container">
//           <button onClick={openGoogleForm}>Fill the Form</button>
//           <Link to="/match">
//           <button>Generate Matches</button>
//         </Link>
//         </div>

//       <section className="content">
//         <div className="image-container">
//         <img src="https://i.pinimg.com/736x/99/2f/6a/992f6ad2245f0587c396a4e0c03767b7.jpg" alt="Roommate Match 1" />
//           <img src="https://i.pinimg.com/736x/d7/27/9b/d7279b8759088efa69e5a81e77975bc6.jpg" alt="Roommate Match 2" />
//           <img src="https://i.pinimg.com/736x/91/f0/97/91f097a8f3f195d49acfa639281c7660.jpg" alt="Roommate Match 3" />
//         </div>
        
//       </section>

//       <style jsx>{`
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }

//         @keyframes pulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//           100% { transform: scale(1); }
//         }

//         body {
//           font-family: 'Poppins', Arial, sans-serif;
//           margin: 0;
//           padding: 0;
//           background-color: #f0f4f8;
//           animation: fadeIn 2s ease-in-out;
//         }

//         .header {
//           background: linear-gradient(45deg, #99C1B9, #735eb9); 
//           padding: 30px;
//           text-align: center;
//           color: white;
//           animation: fadeIn 2s ease-in-out;
//         }

//         .header h1 {
//           font-size: 2.5rem;
//           margin: 0;
//         }

//         .header p {
//           margin: 10px 0 0;
//           font-size: 1.2rem;
//         }

//         .content {
//           padding: 30px;
//           animation: fadeIn 2s ease-in-out;
//           text-align: center;
//         }

//         .image-container {
//           display: flex;
//           justify-content: center;
//           gap: 15px;
//           margin-bottom: 20px;
//           flex-wrap: wrap;
//           animation: fadeIn 2s ease-in-out;
//         }

//         .image-container img {
//           width: 100%;
//           max-width: 300px;
//           height: auto;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//           animation: pulse 3s infinite;
//         }

//         .text-content {
//           margin-bottom: 20px;
//           font-size: 1.1rem;
//           color: #fff;
//         }

//         .button-container {
//           display: flex;
//           gap: 15px;
//           justify-content: center;
//           margin-top: 20px;
//           animation: fadeIn 2s ease-in-out;
//         }

//         button {
//           padding: 12px 24px;
//           font-size: 16px;
//           background: linear-gradient(135deg, #6a11cb, #2575fc);
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           transition: background-color 0.3s, transform 0.3s;
//         }

//         button:hover {
//           background: linear-gradient(135deg, #4e0cba, #1d62e5);
//           transform: translateY(-3px);
//         }

//         @media (max-width: 768px) {
//           .header h1 {
//             font-size: 2rem;
//           }

//           .header p {
//             font-size: 1rem;
//           }

//           .image-container {
//             gap: 10px;
//           }

//           .text-content {
//             font-size: 1rem;
//           }

//           button {
//             padding: 10px 20px;
//             font-size: 14px;
//           }
//         }

//         @media (max-width: 480px) {
//           .header h1 {
//             font-size: 1.5rem;
//           }

//           .header p {
//             font-size: 0.9rem;
//           }

//           button {
//             padding: 8px 16px;
//             font-size: 12px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Roommate;

// import React from 'react';
// import { Link } from 'react-router-dom';



// const Roommate = () => {
//   const openGoogleForm = () => {
//     window.open('https://forms.gle/P9JkTvxBuzajeTSF9', '_blank');
//   };
//   const navigateToMatch = () => { setShowMatch(true);  };

//   return (
//     <div>
//       <header className="header">
//         <h1>Roommate Finder</h1>
//         <p>Find the perfect roommate with our advanced AI & ML algorithms! ✨</p>
//       </header>
//       <div className="text-content">
//           <p>Looking for someone who matches your vibe? 🤝 Whether you're a night owl or an early bird, our platform has got you covered!</p>
//         </div>
//         <div className="button-container">
//           <button onClick={openGoogleForm}>Fill the Form</button>
//           <Link to="/match">
//           <button>Generate Matches</button>
//         </Link>
//         </div>

//       <section className="content">
//         <div className="image-container">
//         <img src="https://i.pinimg.com/736x/99/2f/6a/992f6ad2245f0587c396a4e0c03767b7.jpg" alt="Roommate Match 1" />
//           <img src="https://i.pinimg.com/736x/d7/27/9b/d7279b8759088efa69e5a81e77975bc6.jpg" alt="Roommate Match 2" />
//           <img src="https://i.pinimg.com/736x/91/f0/97/91f097a8f3f195d49acfa639281c7660.jpg" alt="Roommate Match 3" />
//         </div>
        
//       </section>

//       <style jsx>{`
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }

//         @keyframes pulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//           100% { transform: scale(1); }
//         }

//         body {
//           font-family: 'Poppins', Arial, sans-serif;
//           margin: 0;
//           padding: 0;
//           background-color: #f0f4f8;
//           animation: fadeIn 2s ease-in-out;
//         }

//         .header {
//           background: linear-gradient(45deg, #99C1B9, #735eb9); 
//           padding: 30px;
//           text-align: center;
//           color: white;
//           animation: fadeIn 2s ease-in-out;
//         }

//         .header h1 {
//           font-size: 2.5rem;
//           margin: 0;
//         }

//         .header p {
//           margin: 10px 0 0;
//           font-size: 1.2rem;
//         }

//         .content {
//           padding: 30px;
//           animation: fadeIn 2s ease-in-out;
//           text-align: center;
//         }

//         .image-container {
//           display: flex;
//           justify-content: center;
//           gap: 15px;
//           margin-bottom: 20px;
//           flex-wrap: wrap;
//           animation: fadeIn 2s ease-in-out;
//         }

//         .image-container img {
//           width: 100%;
//           max-width: 300px;
//           height: auto;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//           animation: pulse 3s infinite;
//         }

//         .text-content {
//           margin-bottom: 20px;
//           font-size: 1.1rem;
//           color: #fff;
//         }

//         .button-container {
//           display: flex;
//           gap: 15px;
//           justify-content: center;
//           margin-top: 20px;
//           animation: fadeIn 2s ease-in-out;
//         }

//         button {
//           padding: 12px 24px;
//           font-size: 16px;
//           background: linear-gradient(135deg, #6a11cb, #2575fc);
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           transition: background-color 0.3s, transform 0.3s;
//         }

//         button:hover {
//           background: linear-gradient(135deg, #4e0cba, #1d62e5);
//           transform: translateY(-3px);
//         }

//         @media (max-width: 768px) {
//           .header h1 {
//             font-size: 2rem;
//           }

//           .header p {
//             font-size: 1rem;
//           }

//           .image-container {
//             gap: 10px;
//           }

//           .text-content {
//             font-size: 1rem;
//           }

//           button {
//             padding: 10px 20px;
//             font-size: 14px;
//           }
//         }

//         @media (max-width: 480px) {
//           .header h1 {
//             font-size: 1.5rem;
//           }

//           .header p {
//             font-size: 0.9rem;
//           }

//           button {
//             padding: 8px 16px;
//             font-size: 12px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Roommate;


import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Roommate = () => {
  const [formFilled, setFormFilled] = useState(false);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const openGoogleForm = () => {
    window.open('https://forms.gle/P9JkTvxBuzajeTSF9', '_blank');
    setFormFilled(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const generateMatches = async () => {
    // if (!formFilled) {
    //   alert('Please fill the form first!');
    //   return;
    // }

    if (!name.trim()) {
      alert('Please enter your name!');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/find_matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name: name }),
      });

      const data = await response.json();

      if (response.ok) {
              
        setMatches(data);
      } else {
        console.error('API Error:', data);
        //alert(data.error || 'No matches found');
              Swal.fire({
                      icon: 'warning',
                      title: 'Incorrect name',
                      text: 'Please check your name or fill the form again.',
                      confirmBUttonText: 'Retry',
              });
      }
    } catch (error) {
      console.error('Error fetching matches:', error);
     //alert('There was an error fetching the matches. Please try again.');
              Swal.fire({
                      icon: 'warning',
                      title: 'ERROR',
                      text: 'There was an error fetching the matches. Please try again.',
                      confirmBUttonText: 'Retry',
              });
    } finally {
      setLoading(false);
    }
  };

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

        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={handleNameChange} 
          disabled={loading} 
        />

        <button
        onClick={() => {
          //  if (!formFilled) {
          //   alert('Please fill the form first!');
          // } 
           if (!name.trim()) {
            alert('Please enter your name!');
          } else {
      generateMatches();
       }
      }}
    //  style={{
    //    backgroundColor: formFilled && name.trim() ? '#00b7b8' : '#bbb',
    //    cursor: formFilled && name.trim() ? 'pointer' : 'not-allowed',
    //  }}
    style={{
      backgroundColor: name.trim() ? '#00b7b8' : '#bbb',
      cursor: formFilled && name.trim() ? 'pointer' : 'not-allowed',
    }}
>
    {loading ? 'Generating Matches...' : 'Generate Matches'}

    </button>
      </div>

      {matches.length > 0 && (
        <section className="matches">
          <h2>Top 5 Roommate Matches</h2>
          <div className="matches-container">
            {matches.map((match, idx) => (
              <div key={idx} className="match-card">
                <h3>{match.Name}</h3>
                <p>Gender: {match.Gender}</p>
                <p>Year: {match.Year}</p>
                <p>Branch: {match.Branch}</p>
                <p>Food Preferences: {match["What are your food preferences?"]}</p>
                <p>Cleanliness Rating: {match["What would you rate yourself on the scale of 1-5 in cleanliness ?(5-being you clean your room everyday)"]}</p>
                <p>Night Owl / Early Riser: {match["Are you a night owl or an early riser?"]}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Images in a row */}
      <section className="image-row">
  <div className="image-container">
    <img
      src="https://i.pinimg.com/736x/99/2f/6a/992f6ad2245f0587c396a4e0c03767b7.jpg"
      alt="Roommate Match 1"
      className="animated-image"
    />
    <img
      src="https://i.pinimg.com/736x/d7/27/9b/d7279b8759088efa69e5a81e77975bc6.jpg"
      alt="Roommate Match 2"
      className="animated-image"
    />
    <img
      src="https://i.pinimg.com/736x/91/f0/97/91f097a8f3f195d49acfa639281c7660.jpg"
      alt="Roommate Match 3"
      className="animated-image"
    />
  </div>
</section>



      <style jsx>{`
  body {
    font-family: 'Poppins', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color:#C2FFB5
    color: #fff;
    text-align: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .header {
    background: linear-gradient(45deg,rgb(168, 117, 255),rgb(126, 206, 255));
    padding: 30px;
    text-align: center;
    color: #fff;
    box-shadow: 0px 8px 20px rgb(0, 196, 240);
    border-radius: 20px;
  }

  .header h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  .header p {
    margin: 10px 0 0;
    font-size: 1.5rem;
    line-height: 1.6;
  }

  .text-content {
    font-size: 1.3rem;
    margin: 30px;
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
  }

  input {
    padding: 12px;
    font-size: 1rem;
    width: 250px;
    margin-top: 10px;
    border: none;
    border-radius: 25px;
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  input:focus {
    transform: scale(1.05);
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.4);
  }

  button {
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: bold;
    background: linear-gradient(135deg, #ff758c, #8e44ad);
    color: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 6px 15px rgba(255, 118, 158, 0.4);
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  }

  button:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(255, 118, 158, 0.6);
    background: radial-gradient(135deg, #ff6a88, #9b59b6);
  }

  .matches {
    padding: 40px;
    background: rgba(255, 255, 255, 0.15);
    margin-top: 40px;
    border-radius: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    color: #fff;
  }

  .matches-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .match-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    width: 280px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .match-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  .match-card h3 {
    color: #8e44ad;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg,rgb(181, 140, 223),rgb(146, 75, 227));
    color: white;
  }

  .match-card p {
    font-size: 1rem;
    color: #333;
  }

  .image-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
  }

  .image-container img {
    width: 220px;
    height: 220px;
    border-radius: 15px;
    object-fit: cover;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .image-container img:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  .matches h2 {
    color: #ff758c;
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    .header h1 {
      font-size: 2.5rem;
    }

    .header p {
      font-size: 1.2rem;
    }

    button {
      padding: 12px 24px;
      font-size: 0.9rem;
    }

    .match-card {
      width: 240px;
    }

    .image-container img {
      width: 180px;
      height: 180px;
    }
  }

  @media (max-width: 480px) {
    .header h1 {
      font-size: 2rem;
    }

    .header p {
      font-size: 1rem;
    }

    button {
      padding: 10px 20px;
      font-size: 0.8rem;
    }

    .match-card {
      width: 200px;
    }

    .image-container img {
      width: 150px;
      height: 150px;
    }
  }
  
`}</style>

    </div>
  );
};

export default Roommate;

