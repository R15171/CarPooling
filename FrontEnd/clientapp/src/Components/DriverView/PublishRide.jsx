import React, { useEffect, useState } from 'react';
import '../Css/PublishRide.css'; // Assuming you will create a separate CSS file for styling
import Navbar from '../Layout/Navbar';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const PublishRide = () => { 

  const [isDriverRegistered, setIsDriverRegistered] = useState([]);
  const nav = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);
  const logged = useSelector((state) => state.user.logstate);

  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [rideDate, setRideDate] = useState('');
  const [rideTime, setRideTime] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');

  const handlePublish = (e) => {
    e.preventDefault();
    console.log('Publishing Ride:', {
      source,
      destination,
      rideDate,
      rideTime,
      numberOfSeats,
    });
  };


 // Check if the user is a registered driver
 useEffect(() => {
  if (logged.login && userInfo.uid) {
    console.log("UID: " + userInfo.uid);
    fetch(`https://localhost:7127/api/User/GetDriverInfo?uid=${userInfo.uid}`)
      .then((response) => {
        console.log("Response Status:", response.status);
        if (response.status === 204) {
          console.warn("No driver found (204 No Content)");
          nav('/regDriver'); // Redirect to register driver
          return null; // Stop further processing
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse JSON if the response is not empty
      })
      .then((data) => {
        if (data) {
          console.log("Driver Data:", data);
          setIsDriverRegistered(data.Driver); // Set driver data if found
        }
      })
      .catch((error) => {
        console.error("Error fetching driver data:", error);
      });
  } else {
    nav('/login'); // Redirect to login if user is not logged in
  }
}, []);


  const handleReset = () => {
    setSource('');
    setDestination('');
    setRideDate('');
    setRideTime('');
    setNumberOfSeats('');
  };

  const handleBack = () => {
    console.log('Back button clicked!');
    // Logic for navigation (if required) can be added here.
  };

  return (<div style={{paddingTop:'150px'}}><Navbar/>
    <div className="publish-ride-container" style={{marginTop:'20px'}}>
      
      <h2>Publish a Ride</h2>
      <form className="publish-ride-form" onSubmit={handlePublish}>
        <div className="form-group">
          <label htmlFor="source">Source</label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rideDate">Date</label>
          <input
            type="date"
            id="rideDate"
            value={rideDate}
            onChange={(e) => setRideDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rideTime">Time</label>
          <input
            type="time"
            id="rideTime"
            value={rideTime}
            onChange={(e) => setRideTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfSeats">Number of Seats</label>
          <input
            type="number"
            id="numberOfSeats"
            value={numberOfSeats}
            onChange={(e) => setNumberOfSeats(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="publish-btn">Publish</button>
          <button type="button" className="back-btn"><Link to="/">Back</Link></button>
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default PublishRide;


//   ABOVE CODE IS PROVIDED BY RUSHIKESH
