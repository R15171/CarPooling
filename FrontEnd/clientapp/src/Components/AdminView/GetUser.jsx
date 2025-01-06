import React, { useState, useEffect } from 'react';
import '../Css/GetUsers.css'; 

const GetUser = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(`https://localhost:7127/api/Carpooling/GetUsers`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error:", error));
  }, [])

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
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}> 
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contactno}</td>
              <td>{user.dob}</td>
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