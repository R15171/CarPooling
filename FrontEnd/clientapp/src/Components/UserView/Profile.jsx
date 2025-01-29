import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';

const UserProfile = () => {
  // Initial state for user profile
  const [profile, setProfile] = useState({
    name: '',
    contactNo: '',
    email: '',
    gender: '',
    dob: '',
    address: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to the server)
    console.log('Profile updated:', profile);
  };

  return (<>
  <Navbar/>
    <div className="container mt-5" style={{paddingTop:"130px"}}>
      <h2 className="text-center mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            {/* Name */}
            <tr>
              <td>
                <label>Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </td>
            </tr>

            {/* Contact Number */}
            <tr>
              <td>
                <label>Contact Number:</label>
              </td>
              <td>
                <input
                  type="tel"
                  name="contactNo"
                  className="form-control"
                  value={profile.contactNo}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  required
                />
              </td>
            </tr>

            {/* Email */}
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </td>
            </tr>

            {/* Gender */}
            <tr>
              <td>
                <label>Gender:</label>
              </td>
              <td>
                <select
                  name="gender"
                  className="form-control"
                  value={profile.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </td>
            </tr>

            {/* Date of Birth */}
            <tr>
              <td>
                <label>Date of Birth:</label>
              </td>
              <td>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={profile.dob}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>

            {/* Address */}
            <tr>
              <td>
                <label>Address:</label>
              </td>
              <td>
                <textarea
                  name="address"
                  className="form-control"
                  value={profile.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  rows="3"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default UserProfile;