import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import "./Login.css";

export default function Login({ showAlert }) {
  const { mode } = useContext(noteContext);
  const [loginDetails, SetLoginDetails] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const onChange = (e) => {
    SetLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      return showAlert(
        "warning",
        `${!loginDetails.email ? "Email" : "Password"} can not be empty`
      );
    }
    e.preventDefault();
    fetch("http://localhost:8082/api/auth/login", {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginDetails.email,
        password: loginDetails.password,
      }),
    })
      .then(async (result) => {
        let login = await result.json();
        if (login.success) {
          showAlert("success", `User login.`);
          localStorage.setItem("token", login.token);
          //redirect
          navigate("/");
        } else {
          return showAlert("warning", `Enter proper details.`);
        }
      })
      .catch((err) => {
        console.err(err.message);
      });
    SetLoginDetails({ email: "", password: "" });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form className="form-media">
        <h1 className="h3 mb-3 fw-normal text-center">Login</h1>

        <div className="form-floating mb-3 ">
          <input
            name="email"
            type="email"
            className={`form-media form-control w-100  bg-${
              mode === "dark" ? "black" : "body-secondary"
            } border border-${mode === "dark" ? "light" : "dark"} fs-3 text-${
              mode === "dark" ? "light" : "dark"
            } `}
            id="floatingInput"
            placeholder="name@example.com"
            onChange={onChange}
            value={loginDetails.email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            name="password"
            onChange={onChange}
            value={loginDetails.password}
            type="password"
            className={`form-media form-control   bg-${
              mode === "dark" ? "black" : "body-secondary"
            } border border-${mode === "dark" ? "light" : "dark"} text-${
              mode === "dark" ? "light" : "dark"
            } `}
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}
