import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary w-100 py-3">
      <a className="navbar-brand" href="#">
        <img
          src="../../Images/Carpooling Image 1.jpeg"
          alt="Carpooling Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        CarPooling
      </a>

      {/* Dropdown Menu */}
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
