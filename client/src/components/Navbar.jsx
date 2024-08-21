import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const Navbar = () => {
  const { isAuthenticated, setisAuthenticated, logOut } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h2 className="text-light">MERN Recipe</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <>
                <Link to="/add" className="nav-link btn btn-light mx-2">
                  Add
                </Link>
                <Link to="/profile" className="nav-link btn btn-light mx-2">
                  Profile
                </Link>
                <div
                  className="nav-link btn btn-danger mx-2"
                  onClick={logOut}
                  style={{ cursor: "pointer" }}
                >
                  LogOut
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link btn btn-light mx-2">
                  Login
                </Link>
                <Link to="/register" className="nav-link btn btn-light mx-2">
                  Register
                </Link>
              </>
            )}
            <Link to="/saved" className="nav-link btn btn-light mx-2">
              Saved
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
