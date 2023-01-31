import React from "react";
import Notes from "./Notes";

export default function Home() {
  return (
    <div className="">
      <h3 className="mt-5 text-capitalize">Add a note</h3>
      <form className="my-2">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title...
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description...
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h2 className="text-capitalize">Your notes</h2>
      <Notes />
    </div>
  );
}
