import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid ps-4 pe-4">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        <ul className="d-flex flex-row navbar-nav">
          <li className="nav-item">
            <Link className="nav-link me-2 " aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link me-2" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
