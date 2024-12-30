
import React, { useState, useEffect } from 'react';
import '../Css/BookRide.css'; // Assuming you will create a separate CSS file for styling
import Navbar from '../Layout/Navbar';

const BookRide = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [rideDate, setRideDate] = useState('');
  const [rideTime, setRideTime] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  // Hardcoded locations from Maharashtra (for now)
  const locationsFromMaharashtra = [
    'Pune',
    'Mumbai',
    'Ahmed Nagar',
    'Nagpur',
    'Kolhapur',
    'Nashik',
    'Aurangabad',
    'Thane',
    'Solapur',
    'Ratnagiri',
    'Satara',
    'Raigad',
    'Latur',
    'Chandrapur',
    'Jalgaon',
    'Akola',
    'Parbhani',
    'Bhandara'
  ];

  // State to hold locations fetched from the server (simulating here)
  const [locations, setLocations] = useState({
    pickup: locationsFromMaharashtra,
    destination: locationsFromMaharashtra
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Ride:', {
      pickupLocation,
      destination,
      rideDate,
      rideTime,
      passengerCount,
    });
  };

  return (
    <div className="book-ride-container">
      <h2>Book a Ride</h2>
      <form onSubmit={handleSubmit} className="book-ride-form">
        <div className="form-group">
          <label htmlFor="pickupLocation">Pickup Location</label>
          <select
            id="pickupLocation"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          >
            <option value="">Select Pickup Location</option>
            {locations.pickup.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="">Select Destination</option>
            {locations.destination.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rideDate">Ride Date</label>
          <input
            type="date"
            id="rideDate"
            value={rideDate}
            onChange={(e) => setRideDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rideTime">Ride Time</label>
          <input
            type="time"
            id="rideTime"
            value={rideTime}
            onChange={(e) => setRideTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengerCount">Passenger Count</label>
          <input
            type="number"
            id="passengerCount"
            value={1}
            readOnly
          />
        </div>
        <button type="submit" className="submit-btn">Book Ride</button>
      </form>
    </div>
  );
};

export default BookRide;


















