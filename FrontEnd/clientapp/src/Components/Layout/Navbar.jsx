import React, { useState } from 'react';
import logo from '../Images/Logo2.jpg';
import register from '../Images/Register.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = () => {
  const [showComponent, setShowComponent] = useState(false);

  const userInfo = useSelector((state) => state.user.userInfo);
  const logged = useSelector((state) => state.user.logged);
  const handleRedirect = () => {

  }

  return (<>
    <nav className="navbar bg-body-tertiary d-flex align-items-center justify-content-between px-3">
      {/* Logo and Title */}
      <div className="d-flex align-items-center">
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
          {logged ? (
            <div className="me-3">
              <Link to="/login" className="text-decoration-none mx-2">
                Login
              </Link>
              <Link to="/register" className="text-decoration-none mx-2">
                Register
              </Link>
            </div>
          ) : (
            <div className="me-3">
              {userInfo.name}
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
          <a
            href="#home"
            className="btn text-decoration-none mx-3 text-dark link-hover"
          >
            Home
          </a>
          <a
            href="#about"
            className="btn text-decoration-none mx-3 text-dark link-hover"
          >
            About
          </a>
          <a
            href="#services"
            className="btn text-decoration-none mx-3 text-dark link-hover"
          >
            Services
          </a>
          <a
            href="#contact"
            className="btn text-decoration-none mx-3 text-dark link-hover"
          >
            Contact
          </a>
        </nav>
      )}
    </div>

  </>
  );
};

export default Navbar;
