// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

// import "./Home.css";
// import "./testimonials.css";
// import logo from '../assets/hb_logo.png';
// import extra from '../assets/extra.png';
// import main from './Main_bg.png';


// const Home = () => {
//   const [dropdown, setDropdown] = useState({ lostAndFound: false, buyAndSell: false });

//   const toggleDropdown = (menu, isOpen) => {
//     setDropdown((prevState) => ({ ...prevState, [menu]: isOpen }));
//   };


//   return (
//     <div className="home">

//       <header className="home-header">
//         <div className="logo-container">
//           <img src={logo} alt="HostelBuddy Logo" className="logo" />
//         </div>
//         <Link to="/display" className="animated-display-button"> Check Whats New ! </Link>
//         <nav className="navbar">
//           <ul>
//             <li><ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink></li>
//             <li><ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
//             <li><ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink></li>
//             <li><ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink></li>
//           </ul>
//         </nav>
//         <div className="display-button">

//         </div>


//         {/* <h1 className="slogan">HostelBuddy: Your Home Away From Home</h1>
//         <p className="description">
//           Whether you're a night owl, a study buddy, or the life of the party, HostelBuddy connects you with like-minded friends for an incredible hostel experience. Find your tribe, share epic moments, and create lasting memories.
//           Your next adventure starts here!
//         </p> */}
//         {/* Placeholder for images or other content */}
//         <header className="hero-section">
//           <img src={main} alt="Hero Background" className="hero-image" />
//         </header>

//         {/* <div className="additional-content">
//           <img src={extra} alt="Additional Content" className="full-width-image" />
//         </div> */}

//       </header>

//       <main className="home-main">
//         <h1 style={{ textAlign: "center", color: "", fontSize: "2.5rem", fontFamily: "'Playfair Display', serif" }}>
//           WHAT WE OFFER ?
//         </h1>

//         <div id="features" className="features">


//           <div className="feature-card dropdown-card"
//             onMouseEnter={() => toggleDropdown("FindARoommate", true)}
//             onMouseLeave={() => toggleDropdown("FindARoommate", false)}>
//             <h2>Roommate Finder</h2>
//             <p>Looking for the perfect roommate? Connect with like-minded individuals. Your next great match is just a click away!</p>
//             {dropdown.FindARoommate && (
//               <div className="dropdown-menu">
//                 <Link to="/roommate">
//                   <button className="feature-button">Find a Roommate</button>
//                 </Link>
//               </div>
//             )}
//           </div>
//           <div
//             className="feature-card dropdown-card"
//             onMouseEnter={() => toggleDropdown("lostAndFound", true)}
//             onMouseLeave={() => toggleDropdown("lostAndFound", false)}
//           >
//             <h2>Lost & Found</h2>
//             <p>Report lost items and find what's been found. Quickly connect with others to recover your belongings or help someone else do the same.</p>
//             {dropdown.lostAndFound && (
//               <div className="dropdown-menu">
//                 <Link to="/lost">
//                   <button className="feature-button">Report Lost Item</button>
//                 </Link>
//                 <Link to="/found">
//                   <button className="feature-button">Report Found Item</button>
//                 </Link>
//               </div>
//             )}
//           </div>
//           <div
//             className="feature-card dropdown-card"
//             onMouseEnter={() => toggleDropdown("buyAndSell", true)}
//             onMouseLeave={() => toggleDropdown("buyAndSell", false)}
//           >
//             <h2>Buy & Sell Portal</h2>
//             <p>Find great deals, sell your items. Join our community of shoppers and sellers today!</p>
//             {dropdown.buyAndSell && (
//               <div className="dropdown-menu">
//                 <Link to="/buy">
//                   <button className="feature-button">Buy?</button>
//                 </Link>
//                 <Link to="/sell">
//                   <button className="feature-button">Post an Ad</button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="home-container">
//           <br></br>
//           {/* About Us Section */}
//           <h2 class="heading1">Your Journey, Your Rules, Your Buddies - Only with HostelBuddie!</h2>
//           <p class="description">The Ultimate Guide to surviving college and hostel!</p>
//           <section id="about">
//             <div class="container">

//               <div class="row">
//                 <div class="about-card">
//                   <img src="https://i.pinimg.com/736x/dd/ac/f1/ddacf13289d443f7425a0460e613560d.jpg" class="card-img-top" alt="About Image 1" />
//                   <div class="card-body">
//                     <h5 class="card-title">Community</h5>
//                     <p class="card-text">Join a vibrant community of students and make lifelong friends.</p>
//                   </div>
//                 </div>
//                 <div class="about-card">
//                   <img src="https://i.pinimg.com/736x/78/28/41/782841c15fd106e75cc0396345d5552d.jpg" class="card-img-top" alt="About Image 2" />
//                   <div class="card-body">
//                     <h5 class="card-title">Support</h5>
//                     <p class="card-text">Get the support you need to thrive in your academic and social life.</p>
//                   </div>
//                 </div>
//                 <div class="about-card">
//                   <img src="https://tse4.mm.bing.net/th?id=OIP.GPYArLO5k6RKixE6jqlkcwHaE8&pid=Api&P=0&h=180" class="card-img-top" alt="About Image 3" />
//                   <div class="card-body">
//                     <h5 class="card-title">Resources</h5>
//                     <p class="card-text">Access a wealth of resources to help you succeed in your studies and beyond.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Testimonials Section */}
//           <section id="testimonials">
//             <h1 style={{ textAlign: "center", color: "white", fontSize: "2.5rem", fontFamily: "'Playfair Display', serif" }}>
//               TESTIMONIALS
//             </h1>

//             <div className="container">
//               <div className="row">
//                 <div className="card1">
//                   <img
//                     src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
//                     className="card-img-top"
//                     alt="Testimonial 1"
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">ABC, CSE, 23103XXX</h5>
//                     <p className="card-text">
//                       Being a CSE Student, I didn't require the lab coat that I had bought for chemistry lab. HostelBuddie helped me save my money as I had sold it to a junior.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="card1">
//                   <img
//                     src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
//                     className="card-img-top"
//                     alt="Testimonial 2"
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">XYZ, Civil, 23102XXX</h5>
//                     <p className="card-text">
//                       I am an introvert and was really scared at the beginning about not finding the right roommate. But because of HostelBuddie, I found the best group of friends and roommate who respect my space.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="card1">
//                   <img
//                     src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
//                     className="card-img-top"
//                     alt="Testimonial 3"
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">JKL, Prod, 23109XXX</h5>
//                     <p className="card-text">
//                       I lost my bottle in the library. I panicked, but my friend suggested I use HostelBuddie. I immediately did that and found my bottle! Such a cool application.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>


//       <section id="contact" className="home-footer">
//         <p>&copy; 2024 codHERs: HostelBuddy Project for Ideathon 4.0</p>
//         <h2>Contact Us:</h2>
//         <div className="footer-buttons">
//           <a
//             href="https://www.linkedin.com/in/amisha-g-567566291/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="footer-button"
//           >
//             Amisha's LinkedIn
//           </a>
//           <a
//             href="https://www.linkedin.com/in/himanshi-garg-22b8a32a5/?originalSubdomain=in"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="footer-button"
//           >
//             Himanshi's LinkedIn
//           </a>
//           <a
//             href="https://www.linkedin.com/in/mihiragupta/?originalSubdomain=in"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="footer-button"
//           >
//             Mihira's LinkedIn
//           </a>
//           <a
//             href="https://www.linkedin.com/in/ananyaa-priyadarshini-09675128b/?originalSubdomain=in"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="footer-button"
//           >
//             Ananyaa's LinkedIn
//           </a>
//         </div>
//       </section>


//     </div>
//   );
// };

// export default Home;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Home.css";
import "./testimonials.css";
import logo from '../assets/hb_logo.png';
import extra from '../assets/extra.png';
import main from './Main_bg.png';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [dropdown, setDropdown] = useState({ lostAndFound: false, buyAndSell: false });
    const [posts, setPosts] = useState([]); // State to store fetched posts
    //const [showPosts, setShowPosts] = useState(false); // State to toggle posts display
    const navigate = useNavigate();

    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:4200/posts/lost-found/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("generatetoken")}`, // Replace with your actual token
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setPosts(data);
        navigate("/display", { state: { posts: data } });
        //setShowPosts(true); // Show the posts after fetching
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };
// const Home = () => {
//   const [dropdown, setDropdown] = useState({ lostAndFound: false, buyAndSell: false });
//   const [posts, setPosts] = useState([]); // State to store fetched posts
//   const [showPosts, setShowPosts] = useState(false); // State to toggle posts display
//   const toggleDropdown = (menu, isOpen) => {
//     setDropdown((prevState) => ({ ...prevState, [menu]: isOpen }));
// };

//   // Function to fetch posts from the backend
//   const fetchPosts = async () => {
//       try {
//           const response = await fetch("http://localhost:4200/posts/lost-found/",{
//             method: "GET",
//             headers: {
//                 "Authorization": `Bearer ${localStorage.getItem('generatetoken')}`, // Replace with your actual token
//                 "Content-Type": "application/json"
//             }
//         });
//           if (!response.ok) {
//               throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           console.log(data);
//           setPosts(data);
//           setShowPosts(true); // Show the posts after fetching
//       } catch (error) {
//           console.error("Error fetching posts:", error.message);
//       }
//   };

    return (
        <div className="home">
            <header className="home-header">
                <div className="logo-container">
                    <img src={logo} alt="HostelBuddy Logo" className="logo" />
                </div>
                <button onClick={fetchPosts} className="animated-display-button">
                    Check What's New!
                </button>
                <nav className="navbar">
                    <ul>
                        <li><ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink></li>
                        <li><ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
                        <li><ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink></li>
                    </ul>
                </nav>
                <div className="display-button"></div>
                {/* <h1 className="slogan">HostelBuddy: Your Home Away From Home</h1>
                <p className="description"> Whether you're a night owl, a study buddy, or the life of the party, HostelBuddy connects you with like-minded friends for an incredible hostel experience. Find your tribe, share epic moments, and create lasting memories. Your next adventure starts here! </p> */}
                {/* Placeholder for images or other content */}
                <header className="hero-section">
                    <img src={main} alt="Hero Background" className="hero-image" />
                </header>
                {/* <div className="additional-content">
                    <img src={extra} alt="Additional Content" className="full-width-image" />
                </div> */}
            </header>
            <main className="home-main">
                <h1 style={{ textAlign: "center", color: "", fontSize: "2.5rem", fontFamily: "'Playfair Display', serif" }}> WHAT WE OFFER ? </h1>
                <div id="features" className="features">
                    <div
                        className="feature-card dropdown-card"
                        onMouseEnter={() => toggleDropdown("FindARoommate", true)}
                        onMouseLeave={() => toggleDropdown("FindARoommate", false)}
                    >
                        <h2>Roommate Finder</h2>
                        <p>Looking for the perfect roommate? Connect with like-minded individuals. Your next great match is just a click away!</p>
                        {dropdown.FindARoommate && (
                            <div className="dropdown-menu">
                                <Link to="/roommate">
                                    <button className="feature-button">Find a Roommate</button>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div
                        className="feature-card dropdown-card"
                        onMouseEnter={() => toggleDropdown("lostAndFound", true)}
                        onMouseLeave={() => toggleDropdown("lostAndFound", false)}
                    >
                        <h2>Lost & Found</h2>
                        <p>Report lost items and find what's been found. Quickly connect with others to recover your belongings or help someone else do the same.</p>
                        {dropdown.lostAndFound && (
                            <div className="dropdown-menu">
                                <Link to="/lost">
                                    <button className="feature-button">Report Lost Item</button>
                                </Link>
                                <Link to="/found">
                                    <button className="feature-button">Report Found Item</button>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div
                        className="feature-card dropdown-card"
                        onMouseEnter={() => toggleDropdown("buyAndSell", true)}
                        onMouseLeave={() => toggleDropdown("buyAndSell", false)}
                    >
                        <h2>Buy & Sell Portal</h2>
                        <p>Find great deals, sell your items. Join our community of shoppers and sellers today!</p>
                        {dropdown.buyAndSell && (
                            <div className="dropdown-menu">
                                <Link to="/buy">
                                    <button className="feature-button">Buy?</button>
                                </Link>
                                <Link to="/sell">
                                    <button className="feature-button">Post an Ad</button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="home-container">
                    <br></br>
                    {/* About Us Section */}
                    <h2 className="heading1">Your Journey, Your Rules, Your Buddies - Only with HostelBuddie!</h2>
                    <p className="description">The Ultimate Guide to surviving college and hostel!</p>
                    <section id="about">
                        <div className="container">
                            <div className="row">
                                <div className="about-card">
                                    <img src="https://i.pinimg.com/736x/dd/ac/f1/ddacf13289d443f7425a0460e613560d.jpg" className="card-img-top" alt="About Image 1" />
                                    <div className="card-body">
                                        <h5 className="card-title">Community</h5>
                                        <p className="card-text">Join a vibrant community of students and make lifelong friends.</p>
                                    </div>
                                </div>
                                <div className="about-card">
                                    <img src="https://i.pinimg.com/736x/78/28/41/782841c15fd106e75cc0396345d5552d.jpg" className="card-img-top" alt="About Image 2" />
                                    <div className="card-body">
                                        <h5 className="card-title">Support</h5>
                                        <p className="card-text">Get the support you need to thrive in your academic and social life.</p>
                                    </div>
                                </div>
                                <div className="about-card">
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.GPYArLO5k6RKixE6jqlkcwHaE8&pid=Api&P=0&h=180" className="card-img-top" alt="About Image 3" />
                                    <div className="card-body">
                                        <h5 className="card-title">Resources</h5>
                                        <p className="card-text">Access a wealth of resources to help you succeed in your studies and beyond.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonials Section */}
                    <section id="testimonials">
                        <h1 style={{ textAlign: "center", color: "white", fontSize: "2.5rem", fontFamily: "'Playfair Display', serif" }}> TESTIMONIALS </h1>
                        <div className="container">
                            <div className="row">
                                <div className="card1">
                                    <img src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" className="card-img-top" alt="Testimonial 1" />
                                    <div className="card-body">
                                        <h5 className="card-title">ABC, CSE, 23103XXX</h5>
                                        <p className="card-text"> Being a CSE Student, I didn't require the lab coat that I had bought for chemistry lab. HostelBuddie helped me save my money as I had sold it to a junior. </p>
                                    </div>
                                </div>
                                <div className="card1">
                                    <img src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" className="card-img-top" alt="Testimonial 2" />
                                    <div className="card-body">
                                        <h5 className="card-title">XYZ, Civil, 23102XXX</h5>
                                        <p className="card-text"> I am an introvert and was really scared at the beginning about not finding the right roommate. But because of HostelBuddie, I found the best group of friends and roommate who respect my space. </p>
                                    </div>
                                </div>
                                <div className="card1">
                                    <img src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" className="card-img-top" alt="Testimonial 3" />
                                    <div className="card-body">
                                        <h5 className="card-title">JKL, Prod, 23109XXX</h5>
                                        <p className="card-text"> I lost my bottle in the library. I panicked, but my friend suggested I use HostelBuddie. I immediately did that and found my bottle! Such a cool application. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <div> */}
                  {/* logic for displaying posts */}
                {/* {showPosts && (
                <div className="posts-container">
                <h2>Latest Posts:</h2>
{posts.length > 0 ? (
    posts.map((post) => (
        <div key={post._id} className="post-card">
          <img 
                src={post.picturepath} 
                alt={post.itemName} 
                className="post-image" 
                style={{ width: "50%", height: "auto", borderRadius: "8px" }} // Add custom styling
            />
            <h3>{post.itemName}</h3>
            <p>{post.itemDescription}</p>
            <p>{post.contactInformation}</p>
        </div>
    )) */}
                {/* ) : (
                    <p>No posts found.</p>
                )}
            </div>
        )}
    </div> */}

            </main>
            <section id="contact" className="home-footer">
                <p>&copy; 2024 codHERs: HostelBuddy Project for Ideathon 4.0</p>
                <h2>Contact Us:</h2>
                <div className="footer-buttons">
                    <a href="https://www.linkedin.com/in/amisha-g-567566291/" target="_blank" rel="noopener noreferrer" className="footer-button">Amisha's LinkedIn</a>
                    <a href="https://www.linkedin.com/in/himanshi-garg-22b8a32a5/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="footer-button">Himanshi's LinkedIn</a>
                    <a href="https://www.linkedin.com/in/mihiragupta/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="footer-button">Mihira's LinkedIn</a>
                    <a href="https://www.linkedin.com/in/ananyaa-priyadarshini-09675128b/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="footer-button">Ananyaa's LinkedIn</a>
                </div>
            </section>
        </div>
    );
};

export default Home;

