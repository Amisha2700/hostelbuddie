import React from 'react';
import '../styles/style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>HostelBuddy</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap" rel="stylesheet" />
      <div className="blur">
        <section id="title">
          <div className="container-fluid">
            {/* Nav Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand hostel" href="#">
                <img src="/images/HOSTEL.png" alt="HostelBuddy Logo" className="logo" />
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#about" style={{ color: 'hsl(305, 21%, 90%)', fontWeight: 'bold', fontFamily: '"Montserrat", sans-serif' }}>About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials" style={{ color: 'hsl(305, 21%, 90%)', fontWeight: 'bold', fontFamily: '"Montserrat", sans-serif' }}>Testimonials</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Contact" style={{ color: 'hsl(305, 21%, 90%)', fontWeight: 'bold', fontFamily: '"Montserrat", sans-serif' }}>Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="register.html">
                      <button type="button" id="button" className="btn btn-outline-light btn-lg ms-3" style={{ fontWeight: 'bold', fontFamily: '"Montserrat", sans-serif' }}>Login / Register</button>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="motion-bar">
              <span className="label">Check out what's new</span>
              <div className="content">
                <a href="display_lost.html">Lost Items</a>
                <a href="display_found.html">Found Items</a>
                <a href="display_buy.html">Buy Items</a>
                <a href="display_sell.html">Sell Items</a>
              </div>
            </div>
            {/* Title */}
            <div className="row whaat">
  <div className="col-lg-6 order-lg-1">
    <h1 className="heading">Your new home away from home!</h1>
    <h3
      style={{
        fontSize: '1.5rem',
        color: '#ffffff',
        marginTop: '1rem',
        fontFamily: '"Ubuntu", sans-serif',
        textAlign: 'left',
      }}
    >
      Whether you're a night owl, a study buddy, or the life of the party, HostelBuddie connects you with like-minded friends for an incredible hostel experience. Find your tribe, share epic moments, and create lasting memories. Your next adventure starts here!
    </h3>
  </div>
  <div className="col-lg-6 order-lg-2">
     <img src="/images/hostelbuddiebg.png"
      alt="HostelBuddy" 
      
      className="img-fluid" style={{ width: '100vw', height: 'auto'}} />
   </div>
</div>

          </div>
        </section>
        {/* About */}
        <section id="about">
          <div className="container">
            <h2 className="heading1">Your Journey, Your Rules, Your Buddies - Only with HostelBuddie!</h2>
            <p className="description">The Ultimate Guide to surviving college and hostel!</p>
            <div className="row">
              <div className="card">
                <img src="https://i.pinimg.com/736x/dd/ac/f1/ddacf13289d443f7425a0460e613560d.jpg" className="card-img-top" alt="About Image 1" />
                <div className="card-body">
                  <h5 className="card-title">Community</h5>
                  <p className="card-text">Join a vibrant community of students and make lifelong friends.</p>
                </div>
              </div>
              <div className="card">
                <img src="https://i.pinimg.com/736x/78/28/41/782841c15fd106e75cc0396345d5552d.jpg" className="card-img-top" alt="About Image 2" />
                <div className="card-body">
                  <h5 className="card-title">Support</h5>
                  <p className="card-text">Get the support you need to thrive in your academic and social life.</p>
                </div>
              </div>
              <div className="card">
                <img src="https://tse4.mm.bing.net/th?id=OIP.GPYArLO5k6RKixE6jqlkcwHaE8&pid=Api&P=0&h=180" className="card-img-top" alt="About Image 3" />
                <div className="card-body">
                  <h5 className="card-title">Resources</h5>
                  <p className="card-text">Access a wealth of resources to help you succeed in your studies and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <h1 className="text-center my-5" style={{ color: 'white', fontFamily: '"Montserrat", sans-serif' }}>Testimonials</h1>
            <div className="container">
              <div className="row">
                <div className="card1 col-md-4">
                  <h2 className="h24">Being a CSE Student, I didn't require the lab coat that I had bought for chemistry lab. HostelBuddie helped me save my money as I had sold it to a junior.</h2>
                  <img className="testimonials-image" src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="lady-profile" />
                  <em style={{ display: 'block', textAlign: 'center', color: 'white' }}>ABC, CSE, 23103XXX</em>
                </div>
                <div className="card1 col-md-4">
                  <h2 className="h24">I am an introvert and was really scared at the beginning about not finding the right roommate. But because of HostelBuddie, I found the best group of friends and roommate who respect my space.</h2>
                  <img className="testimonials-image" src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="dog-profile" />
                  <em style={{ display: 'block', textAlign: 'center', color: 'white' }}>XYZ, Civil, 23102XXX</em>
                </div>
                <div className="card1 col-md-4">
                  <h2 className="h24">I lost my bottle in the library. I panicked, but my friend suggested I use HostelBuddie. I immediately did that and found my bottle! Such a cool application.</h2>
                  <img className="testimonials-image" src="https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="omi-vaish" />
                  <em style={{ display: 'block', textAlign: 'center', color: 'white' }}>JKL, Prod, 23109XXX</em>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section id="Contact">
          <div className="lowwer">
            <div className="linkss">
              <a className="footer-link" href="https://pec.ac.in/">College Website</a>
              <a className="footer-link" href="https://github.com/mihira4/hostelbuddie">Github</a>
            </div>
            <p className="last text-center">© HostelBuddie - team codHERs, CSE, Batch of 2027.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
