import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../ReduxStore/UserSlice';


const Login = () => {
  const dispatch=useDispatch();
  let nav=useNavigate();
  const [loginData, setFormData] = useState({
    contact: '',
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
      body: JSON.stringify(loginData)
  }
    fetch("https://localhost:7076/api/User/Register",reqInf)
    .then(response => {console.log(response);
      if(!(response.ok)){throw new Error(response.statusText);}
      return response.json();})
      .then(data=>{
        dispatch(login(data));
        nav('/home')})
    .catch(msg=>{setMsg("Enter valid Contact no. and password");console.log(msg)})
  };




  return (<>
    <div className="d-flex justify-content-center align-items-center mt-5">

      <div className="container border rounded p-4 shadow"
    style={{ maxWidth: "450px", width: "100%" }}>
      <h2 className="text-center mb-4">Login</h2>
        
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-primary w-30 mt-3">
              Login
            </button>
          </div>
        </form>
        <div className='text text-danger' style={{textAlign:'center', padding:'10px'}}>
          {msg} 
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
