import React, { useState, useEffect } from 'react';
import './GetUsers.css'; 

const GetUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const generateRandomUsers = () => {
      const randomUsers = [];
      for (let i = 0; i < 10; i++) {
        randomUsers.push({ 
          userId: i + 1, 
          name: `User ${i + 1}`, 
          email: `user${i + 1}@example.com`, 
          contact: `123-456-7${i + 1}`, 
          dob: `1990-01-${Math.floor(Math.random() * 28) + 1}`, 
          aadharNumber: `1234${i + 1}${i + 1}${i + 1}${i + 1}`, 
          gender: ['Male', 'Female'][Math.floor(Math.random() * 2)], 
          address: `Address ${i + 1}` 
        });
      }
      setUsers(randomUsers);
    };

    generateRandomUsers();
  }, []);

  return (
    <div className="container"> 
      <h2>User Information</h2>
      <table className="table table-striped"> 
        <thead>
          <tr>
            <th>UserId</th> 
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Date of Birth</th>
            <th>Aadhar Number</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}> 
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.dob}</td>
              <td>{user.aadharNumber}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetUser;