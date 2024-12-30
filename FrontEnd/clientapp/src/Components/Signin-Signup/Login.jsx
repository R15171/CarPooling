import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../ReduxStore/UserSlice';


const Login = () => {
  const dispatch = useDispatch();
  let nav = useNavigate();

  const [loginData, setLoginData] = useState({
    contactno: '',
    password: ''
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData, [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const reqInf = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };
  
    fetch("http://localhost:8080/login", reqInf)
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
        if (data === null) {
          setMsg("Invalid contact number or password");
        } else {
          console.log(data);
          dispatch(login(data));
          console.log(data);
          nav("/");
        }
      })
      .catch((error) => {
        // Log the actual error for debugging
        console.error("Error during login:", error);
        setMsg("An error occurred while logging in");
      });
  };


    return (<>
    <div className="d-flex justify-content-center align-items-center mt-5">

      <div className="container border rounded p-4 shadow"
        style={{ maxWidth: "450px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="contactno" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="contactno"
              id='contactno'
              placeholder="Contact No"
              value={loginData.contactno}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id='password'
              placeholder="Set Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-primary w-30 mt-3">
              Login
            </button>
          </div>
        </form>
        <div className='text text-danger' style={{ textAlign: 'center', padding: '10px' }}>
          {msg}
        </div>
      </div>
    </div>
    <div>{JSON.stringify(loginData)}</div>
  </>
  );
};

export default Login;
