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
    <nav className="navbar bg-body-tertiary d-flex align-items-center justify-content-between px-3" style={{background: "linear-gradient(90deg,rgb(255, 205, 96),rgb(0, 156, 60))",}}>
      {/* Logo and Title */}
      <div className="d-flex align-items-center" >
        <img
          src={logo}
          alt="Carpooling Logo"
          className="d-inline-block align-text-top rounded-circle"
          width="70"
          height="70"
        />
        <h1 className="text-primary mx-3">Carpooling</h1>
      </div>

      {/* Login/Register and Profile Section */}
      <div className="d-flex align-items-center">
        {/* Login and Register Links */}

        <div>
          {logged.login ?
            (
              <div className="me-3" style={{ color: 'black', fontSize: '30px' }}>
                {userInfo.name}
              </div>
            )
            :
            (
              <div className="me-3">
                <Link to="/login" className="text-decoration-none mx-1 btnlink">
                  Login
                </Link>
                <Link to="/register" className="text-decoration-none mx-2 btnlink">
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
            className="btn text-decoration-none mx-1 text-dark link-hover btnlink"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="btn text-decoration-none mx-1 text-dark link-hover btnlink"
          >
            Profile
          </Link>
          <Link
            to="/history"
            className="btn text-decoration-none mx-1 text-dark link-hover btnlink"
          >
            Trip Histroy
          </Link>
          <Link
            href="/Noti"
            className="btn text-decoration-none mx-1 text-dark link-hover btnlink"
          >
            Notification
          </Link>
          <div
            className="btn text-decoration-none mx-1 text-dark link-hover btnlink"
            onClick={() => { dispatch(logout()); nav('/') }}
          >
            Logout
          </div>

          {role == '1' && (
            <Link to="/admin" className="btn text-decoration-none mx-1 text-dark link-hover btnlink">
              Admin
            </Link>
          )}

        </nav>
      )}
    </div>

  </>
  );
};

export default Navbar;
