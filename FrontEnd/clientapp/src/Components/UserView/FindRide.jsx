import React, { useState, useEffect } from 'react';
import '../Css/FindRide.css'; // Assuming you will create a separate CSS file for styling
import Navbar from '../Layout/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addride} from '../../ReduxStore/UserSlice';

const FindRide = () => {
  const [cities, setCities] = useState([]);
  const [find, setFind] = useState({
    source: '',
    destination: '',
    rideDate: ''
  });

  // Handle form input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFind((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  let nav = useNavigate();
  const [msg, setMsg] = useState("");

  // Fetch cities data
  useEffect(() => {
    fetch('https://localhost:7182/api/User/GetCities')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Something went wrong with the connection', error));
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Booking Ride:', find);

    fetch('https://localhost:7182/api/User/GetRides?source=' + find.source + '&desti=' + find.destination + '&date=' + find.rideDate)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          // Log if the response was not OK (e.g., 404, 500)
          console.error("Error: Network response was not ok", response.status);
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response to JSON
      })
      .then((data) => {
        console.log(data);
        dispatch(addride(data));
        nav("/rides");
      }
      )
      .catch((error) => {
        // Log the actual error for debugging
        console.error("Error during login:", error);
        setMsg("An error occurred while logging in");
      });

  };

  return (
    <>
      <Navbar />
      <div className="book-ride-container">
        <h2>Find a Ride</h2>
        <form onSubmit={handleSubmit} className="book-ride-form">
          {/* Pickup Location */}
          <div className="form-group">
            <label htmlFor="source">Pickup Location</label>
            <select
              id="source"
              name="source"  // Use the name attribute for dynamic handling
              value={find.source}
              onChange={handleChange}
              required
            >
              <option value="">Select Pickup Location</option>
              {cities.map((city) => (
                <option key={city.cityId} value={city.cityId}>
                  {city.cityname}
                </option>
              ))}
            </select>
          </div>

          {/* Destination */}
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <select
              id="destination"
              name="destination"  // Use the name attribute for dynamic handling
              value={find.destination}
              onChange={handleChange}
              required
            >
              <option value="">Select Destination</option>
              {cities.map((city) => (
                <option key={city.cityId} value={city.cityId}>
                  {city.cityname}
                </option>
              ))}
            </select>
          </div>

          {/* Ride Date */}
          <div className="form-group">
            <label htmlFor="rideDate">Ride Date</label>
            <input
              type="date"
              id="rideDate"
              name="rideDate"  // Use the name attribute for dynamic handling
              value={find.rideDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button type="submit" className="submit-btn">Find Ride</button>
          </div>
        </form>
      </div>
      {/* Display the current form values (for debugging purposes) */}
      <h1>{JSON.stringify(find)}</h1>
    </>
  );
};

export default FindRide;
