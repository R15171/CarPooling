import React from 'react';
import Navbar from '../Layout/Navbar';
import { Link } from 'react-router-dom';
import gif1 from '../Images/carpool.gif';
import gif2 from '../Images/carpool2.gif';
import '../Css/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Content Row */}
        <div className="row content-row">
          {/* Left Section with GIF */}
          <div className="col-md-5 gif-section animate-slide-left">
            <img src={gif1} alt="Carpool GIF" className="gif-image" />
          </div>

          {/* Center Section with Buttons */}
          <div className="col-md-6 button-container animate-zoom-in">
            <h2 className="title">Plan Your Ride</h2>
            <div className="button-group">
              <button className="custom-btn">
                <Link to="/publishRide" className="custom-link">
                  Publish Ride
                </Link>
              </button>
              <button className="custom-btn">
                <Link to="/findRide" className="custom-link">
                  Find Ride
                </Link>
              </button>
            </div>
          </div>

          {/* Right Section with GIF */}
          {/* <div className="col-md-5 gif-section animate-slide-right">
            <img src={gif2} alt="Carpool GIF" className="gif-image" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
