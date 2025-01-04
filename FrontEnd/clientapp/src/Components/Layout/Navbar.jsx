import React, { useEffect, useState } from 'react';
import logo from '../Images/Logo2.jpg';
import register from '../Images/Register.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../ReduxStore/UserSlice';
import '../Css/navbar.css';


const Navbar = () => {
  const [showComponent, setShowComponent] = useState(true);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const userInfo = useSelector((state) => state.user.userInfo);
  const logged = useSelector((state) => state.user.logstate);
  const role = userInfo.rid;

  console.log(userInfo.name);
  console.log("Is loged : " + logged.login);
  console.log(role);


  return (<>
    <nav className="navbar  d-flex align-items-center justify-content-between px-3"

      style={{ background: 'slateblue' }}
    >
      {/* Logo and Title */}
      <div className="d-flex align-items-center" >
        <img
          src={logo}
          alt="Carpooling Logo"
          className="d-inline-block align-text-top rounded-circle"
          width="70"
          height="70"
        />
        <h1 className="text-primary mx-3"><span style={{ color: 'white' }}>Carpooling</span></h1>
      </div>

      {/* Login/Register and Profile Section */}
      <div className="d-flex align-items-center">
        {/* Login and Register Links */}

        <div>
          {logged.login ?
            (
              <div className="me-3" style={{ color: 'white', fontSize: '30px' }}>
                {userInfo.name}
              </div>
            )
            :
            (
              <div className="me-3">
                <Link to="/login" className="btn text-light mx-1 btnlink">
                  Login
                </Link>
                <Link to="/register" className="btn text-light mx-2 btnlink">
                  Register
                </Link>
              </div>
            )
          }
        </div>


        {/* Profile Image */}
        <button
          className="btn btn-light p-1"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            setShowComponent(!showComponent);
          }}
        >
          <img
            src={register}
            alt="Profile"
            className="d-inline-block align-text-top rounded-circle"
            width="50"
            height="50"
          />
        </button>
      </div>
    </nav>

    {/* Dropdown Navigation */}
    <div>
      {showComponent && logged && (
        <nav className="d-flex justify-content-center">
          <Link
            to="/"
            className="btn mx-1 btnlink"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="btn mx-1 text-dark link-hover btnlink"
          >
            Profile
          </Link>
          <Link
            to="/history"
            className="btn mx-1 text-dark link-hover btnlink"
          >
            Trip Histroy
          </Link>

          <Link
            to="/Noti"
            className="btn mx-1 text-dark link-hover btnlink"
          >
            Notification
          </Link>
          {role == '1' && (
            <Link to="/admin" className="btn mx-1 text-dark link-hover btnlink">
              Admin
            </Link>
          )}

          <div
            className="btn mx-1 text-dark link-hover btnlink"
            onClick={() => { dispatch(logout()); nav('/') }}
          >
            Logout
          </div>

          
        </nav>
      )}
    </div>

  </>
  );
};

export default Navbar;
