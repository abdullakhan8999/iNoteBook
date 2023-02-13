import React, { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
export default function Navbar() {
  let location = useLocation();
  const context = useContext(noteContext);
  const { mode, setMode } = context;

  const handleThemes = () => {
    if (mode === "dark") {
      setMode("Light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "rgb(16, 33, 58)";
      document.body.style.color = "white";
      setMode("dark");
    }
    mode === "dark" ? setMode("Light") : setMode("dark");
  };
  useEffect(() => {}, [location]);
  return (
    <nav
      className={`navbar navbar-expand-lg bg-dark fixed-top`}
      data-bs-theme="dark"

      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1626080308314-d7868286cce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1YmJsZXMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60)",
      }}
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
                className="form-check-label text-capitalize  text-light"
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
