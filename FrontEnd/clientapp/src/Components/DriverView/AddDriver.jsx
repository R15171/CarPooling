import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

const AddDriver = () => {
  const [driverData, setDriverData] = useState({
    drivingLicence: '',
    vehicleInfo: ''
  });
  const [isDriverRegistered, setIsDriverRegistered] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const logged = useSelector((state) => state.user.logstate);
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { drivingLicence, vehicleInfo } = driverData;

    if (drivingLicence && vehicleInfo) {
     
      fetch('https://localhost:7127/api/User/RegDriver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: userInfo.uid,
          drivingLicence,
          vehicleInfo,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          alert('Driver registration successful!');
          nav('/publishRide');  // Redirect to Home page after successful registration
        })
        .catch((error) => {
          console.error("Error registering driver:", error);
          alert('Registration failed, please try again.');
        });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5" style={{maxWidth:'500px', border:'2px dotted black'}}>
        <h2>Mandatory Details to Publish Ride</h2>
        {!isDriverRegistered ? (
          <form onSubmit={handleSubmit} className="mt-4">
            {/* Driving License Input */}
            <div className="mb-3">
              <label htmlFor="drivingLicense" className="form-label">Driving License</label>
              <input
                type="text"
                id="drivingLicense"
                name="drivingLicense"
                className="form-control"
                value={driverData.DrivingLicense}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Vehicle Info Input */}
            <div className="mb-3">
              <label htmlFor="vehicleInfo" className="form-label">Vehicle Information</label>
              <input
                type="text"
                id="vehicleInfo"
                name="vehicleInfo"
                className="form-control"
                value={driverData.VehicleInfo}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Add Details</button>
            </div>
          </form>
        ) : (
          <div>
            <h3>You are already registered as a driver!</h3>
            <button className="btn btn-secondary" onClick={() => nav('/')}>Go to Home</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddDriver;
