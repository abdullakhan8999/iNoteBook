import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  const [mode, setMode] = useState("dark");

  const handleThemes = () => {
    mode === "dark" ? setMode("Light") : setMode("dark");
  };
  useEffect(() => {}, [location]);
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${mode} mb-3`}
      data-bs-theme={`${mode}`}
    >
      <div className="container-fluid ps-4 pe-4">
        <Link className="navbar-brand" to="/">
          iNoteBook
        </Link>

        <ul className="d-flex flex-row navbar-nav">
          <li className="nav-item">
            <Link
              className={`nav-link  me-2 ${
                location.pathname === "/" ? "active" : ""
              }`}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link  me-2 ${
                location.pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <div className="form-check form-switch pt-2">
              <input
                className="form-check-input bg-black"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={handleThemes}
              />
              <label
                className={`form-check-label text-capitalize  text-${
                  mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckChecked"
              >
                {mode}
              </label>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
