import React from 'react';
import Navbar from '../Layout/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (<>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center mt-3" style={{paddingTop:'100px'}}>

      <div className="row card mx-5">
        ***************
      </div>

      <div
  className="row container border rounded p-4 shadow"
  style={{ maxWidth: "800px", width: "100%" }}
>
  <div className="row">
    {/* Left Button */}
    <div className="col-md-6">
      <button className="btn custom-btn" style={{ width: "100%" }}>
        <Link to="/publishRide" className="custom-link">
          Publish Ride
        </Link>
      </button>
    </div>

    {/* Right Button */}
    <div className="col-md-6">
      <button className="btn custom-btn" style={{ width: "100%" }}>
        <Link to="/findRide" className="custom-link">
          Find Ride
        </Link>
      </button>
    </div>
  </div>
</div>

<style>
  {`
    /* Button Container */
    .custom-btn {
      background: linear-gradient(90deg, #ff7e5f, #feb47b); /* Gradient background */
      border: none; /* Remove borders */
      padding: 10px 20px; /* Button size */
      border-radius: 30px; /* Fully rounded corners */
      color: white;
      font-size: 1.2rem; /* Larger text size */
      font-weight: bold; /* Bold text */
      transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth animation */
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
    }

    /* Hover Effect */
    .custom-btn:hover {
      transform: scale(1.05); /* Slightly enlarge on hover */
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
    }

    /* Link Styling */
    .custom-link {
      color: white; /* White text */
      text-decoration: none; /* Remove underline */
    }

    /* Link Hover Effect */
    .custom-link:hover {
      text-decoration: underline; /* Add underline on hover */
    }
  `}
</style>


      <div className="row card mx-5">
        <div>
          ***********
        </div>
      </div>
    </div>

  </>
  );
};


export default Home;
