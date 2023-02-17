import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

export default function SignUp({ showAlert }) {
  const navigate = useNavigate();
  const { mode } = useContext(noteContext);
  const [signUpDetails, SetSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const onChange = (e) => {
    SetSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !signUpDetails.name ||
      !signUpDetails.email ||
      !signUpDetails.password ||
      !signUpDetails.rePassword
    ) {
      return showAlert(
        "warning",
        `${
          !signUpDetails.name
            ? "Name"
            : !signUpDetails.email
            ? "Email"
            : !signUpDetails.password
            ? "Password"
            : "RePassword"
        } can not be empty`
      );
    }
    if (signUpDetails.password !== signUpDetails.rePassword) {
      return showAlert("warning", "Password and rePassword should be same");
    }
    e.preventDefault();
    fetch("http://localhost:8082/api/auth/createuser", {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: signUpDetails.name,
        email: signUpDetails.email,
        password: signUpDetails.password,
      }),
    })
      .then(async (result) => {
        let signUp = await result.json();
        if (signUp.success) {
          showAlert("success", `User created successfully.`);
          localStorage.setItem("token", signUp.token);
          //redirect
          navigate("/");
        } else {
          return showAlert("warning", `Enter proper details.`);
        }
      })
      .catch((err) => {
        console.err(err.message);
      });
    SetSignUpDetails({ name: "", email: "", password: "", rePassword: "" });
  };
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form className="form-media">
        <h1 className="h3 mb-3 fw-normal text-center">SignUp</h1>

        <div className="form-floating mb-3 ">
          <input
            name="name"
            type="text"
            className={`form-media form-control w-100  bg-${
              mode === "dark" ? "black" : "body-secondary"
            } border border-${mode === "dark" ? "light" : "dark"} fs-3 text-${
              mode === "dark" ? "light" : "dark"
            } `}
            id="floatingName"
            placeholder="username"
            onChange={onChange}
            value={signUpDetails.name}
          />
          <label htmlFor="floatingName">Username</label>
        </div>
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
            value={signUpDetails.email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            name="password"
            onChange={onChange}
            value={signUpDetails.password}
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
        <div className="form-floating mb-3 ">
          <input
            name="rePassword"
            onChange={onChange}
            value={signUpDetails.rePassword}
            type="password"
            className={`form-media form-control   bg-${
              mode === "dark" ? "black" : "body-secondary"
            } border border-${mode === "dark" ? "light" : "dark"} text-${
              mode === "dark" ? "light" : "dark"
            } `}
            id="floatingRePassword"
            placeholder="Password"
          />
          <label htmlFor="floatingRePassword">rePassword</label>
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
