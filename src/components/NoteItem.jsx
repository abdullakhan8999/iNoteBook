import React from "react";
import { Link } from "react-router-dom";

export default function NoteItem({ note }) {
  return (
    <div className="col-md-3">
      <div className="card my-4">
        <div className="card-header">{note.tag}</div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <Link to="#" className="btn btn-primary mt-3  me-3">
            Edit
          </Link>
          <Link to="#" className="btn btn-danger mt-3 me-3">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
