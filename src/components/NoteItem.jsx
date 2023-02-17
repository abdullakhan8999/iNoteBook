import React, { useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

export default function NoteItem({ note, showAlert, updateNote }) {
  const { deleteNote } = useContext(noteContext);

  const alertMsg = async (event) => {
    event.preventDefault();
    // console.log(note._id);
    await deleteNote(note._id);
    return showAlert("warning", "Note Deleted");
  };
  return (
    <div className="col-md-3">
      <div className="card my-3 text-black">
        <div className="card-header">{note.tag}</div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <Link
            to="#"
            className="btn btn-primary mt-3  me-3"
            onClick={() => updateNote(note)}
          >
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
