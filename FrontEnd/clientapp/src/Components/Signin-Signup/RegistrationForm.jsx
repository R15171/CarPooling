import React, { useState } from 'react';
import gif from '../Images/gif.gif'
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  let nav=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contactno: '',
    email: '',
    address: '',
    gender: '',
    dob: '',
    password: ''
  });
  const [msg,setMsg] =useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., validation, sending data to the server)
    const reqInf={
      method:"POST",
      headers:{
          "content-type":"application/json"
      },
      body: JSON.stringify(formData)
  }
    fetch("https://localhost:7076/api/User/Register",reqInf)
    .then(response => {console.log(response);
      if(!(response.ok)){setMsg("Registration Failed")}nav('/login')})
    .catch(msg=>setMsg("Error Occured"))

  };

  return (<>
    <div className="d-flex justify-content-center align-items-center mt-3">
      
      <div className="card mx-5">
          <img src={gif} alt="Playing GIF" height={500} style={{ maxWidth: "450px", width: "100%" }}/>
      </div>
      
  <div
    className="container border rounded p-4 shadow"
    style={{ maxWidth: "450px", width: "100%" }}
  >
    <h2 className="text-center mb-4">User Registration</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="contactno"
          placeholder="Contact No"
          value={formData.contactno}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label style={{ paddingRight: "20px" }}>Select Gender:</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
          required
        />
        <label htmlFor="male" style={{ paddingRight: "10px" }}>
          Male
        </label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
          required
        />
        <label htmlFor="female" style={{ paddingRight: "10px" }}>
          Female
        </label>
      </div>
      <div className="mb-3">
        <label className="label">Date of Birth</label>
        <input
          type="date"
          className="form-control"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Set Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Register
      </button>
    </form>
    <p className="mt-3 text-center">
      Already have an account? <a href="/login">Login here</a>
    </p>
    <h4 className="text-danger text-center">{msg}</h4>
  </div>
  
      <div className="card mx-5">
        <div>
          <img src={gif} alt="Playing GIF" height={500} style={{ maxWidth: "450px", width: "100%" }}/>
        </div>
      </div>
</div>
<h3>{JSON.stringify(formData)}</h3>
</>
  );
};

export default RegistrationForm;