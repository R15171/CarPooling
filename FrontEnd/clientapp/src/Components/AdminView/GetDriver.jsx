import React, { useState, useEffect } from 'react';
import '../Css/GetDrivers.css'; // Import the CSS file

const GetDriver = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const generateRandomDrivers = () => {
      const randomDrivers = [];
      for (let i = 0; i < 10; i++) {
        randomDrivers.push({
          driverId: i + 1,
          name: `Driver ${i + 1}`,
          email: `driver${i + 1}@example.com`,
          contact: `987-654-3${i + 1}`,
          drivingLicense: `DL${i + 1}123456789`,
          vehicleInfo: `Car - Model ${i + 1}`,
          userId: `user${i + 1}`,
          address: `Driver Address ${i + 1}`,
          dob: `1985-05-${Math.floor(Math.random() * 28) + 1}`, 
          gender: ['Male', 'Female'][Math.floor(Math.random() * 2)]
        });
      }
      setDrivers(randomDrivers);
    };

    generateRandomDrivers();
  }, []);

  return (
    <div className="container">
      <h2>Driver Information</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Driver ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Driving License</th>
            <th>Vehicle Info</th>
            <th>User ID</th>
            <th>Address</th>
            <th>DOB</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.driverId}>
              <td>{driver.driverId}</td>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.contact}</td>
              <td>{driver.drivingLicense}</td>
              <td>{driver.vehicleInfo}</td>
              <td>{driver.userId}</td>
              <td>{driver.address}</td>
              <td>{driver.dob}</td>
              <td>{driver.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetDriver;