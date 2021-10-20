import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary px-5 shadow-lg ">
        <div className="container-fluid ">
          <Link to="/home" className="navbar-brand">
            MATRIX-DIOGNO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link active"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/department"
                  className="nav-link active"
                  aria-current="page"
                >
                  Department
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="text-white fs-4 pe-4 fw-bold text-decoration-none">
                {user?.displayName}
              </Link>
              {user.email ? (
                <button
                  type="button"
                  class="btn btn-outline-light"
                  onClick={logOut}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button type="button" class="btn btn-outline-light">
                    Login
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
