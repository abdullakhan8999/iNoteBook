import React, { useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import "./Navbar.css";
export default function Navbar() {
  let location = useLocation();
  const { mode, setMode } = useContext(noteContext);
  const refCollapse = useRef(null);
  const handleThemes = () => {
    if (mode === "dark") {
      setMode("Light");
      document.body.style.backgroundColor = "#E2E3DF";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "rgb(16, 33, 58)";
      document.body.style.color = "white";
      setMode("dark");
    }
    mode === "dark" ? setMode("Light") : setMode("dark");
    refCollapse.current.click();
  };
  const handleCollapse = () => {
    refCollapse.current.click();
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark fixed-top"
      data-bs-theme="dark"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1626080308314-d7868286cce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1YmJsZXMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60)",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand ms-2" to="/">
            MaNaNoteBook
          </Link>
          <form className={`d-flex ms-3`} role="search">
            <input
              className={`form-control search me-2`}
              type="search"
              placeholder="Search Notes.."
              aria-label="Search"
            />
          </form>
        </div>
        <button
          ref={refCollapse}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link me-2 ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
                onClick={handleCollapse}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link me-2 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
                onClick={handleCollapse}
              >
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <div className="form-check form-switch pt-2">
                <input
                  className="form-check-input bg-black"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onClick={handleThemes}
                />
                <label
                  className="form-check-label text-capitalize text-light"
                  htmlFor="flexSwitchCheckChecked"
                >
                  {mode}
                </label>
              </div>
            </li>
            <li>
              <Link
                className="btn btn-primary me-2 accBtn  "
                to="/login"
                type="submit"
                onClick={handleCollapse}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-primary me-2 accBtn "
                to="/signup"
                type="submit"
                onClick={handleCollapse}
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
