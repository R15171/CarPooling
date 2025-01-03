import React, { useState } from 'react';
import '../Css/PublishRide.css'; // Assuming you will create a separate CSS file for styling

const PublishRide = () => {
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

  return (
    <div className="publish-ride-container">
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
          <button type="button" className="back-btn" onClick={handleBack}>Back</button>
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default PublishRide;


//   ABOVE CODE IS PROVIDED BY RUSHIKESH
