import React from "react";
import { Link } from "react-router-dom";

export default function NoteItem({ note, showAlert }) {
  const alertMsg = (event) => {
    event.preventDefault();
    return showAlert("primary", "Note Deleted.");
  };
  return (
    <div className="col-md-3">
      <div className="card my-3 text-black">
        <div className="card-header">{note.tag}</div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <Link to="#" className="btn btn-primary mt-3  me-3">
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
          <Link to="#" className="btn btn-danger mt-3 me-3" onClick={alertMsg}>
            <i className="fa-solid fa-trash-can"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
