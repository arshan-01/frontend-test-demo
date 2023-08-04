import React from "react";
import { FaBars } from "react-icons/fa"; // Example using react-icons for the bars icon

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Instahyre
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul
              className="navbar-nav"
              style={{ marginLeft: "15px", fontSize: "14px" }}
            >
              <li className="nav-item">
                <a className="nav-link" href="#">
                  INVITE FRIENDS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  FIND JOBS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LOGIN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SIGNUP
                </a>
              </li>
              <li className="nav-item">
                <button
                  style={{
                    marginTop: "5px",
                    backgroundColor: "#03bea5",
                    border: "none",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  EMPLOYERS
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
