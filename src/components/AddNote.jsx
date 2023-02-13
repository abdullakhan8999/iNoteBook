import noteContext from "../context/notes/noteContext";
import React, { useContext, useState } from "react";

export default function AddNote({ showAlert }) {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { addNote, mode } = useContext(noteContext);

  const alertMsg = (event) => {
    event.preventDefault();
    showAlert("primary", "Note submitted.");
    if (!note.title || !note.description ) {
      return showAlert(
        `warning`,
        `Please Enter ${!note.title ? "title" : "description"}`
      );
    }
    addNote(note.title, note.description, note.tag);
    
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mt-3 text-capitalize ">Add a note</h3>
        <input
          type="text"
          name="tag"
          className="form-control "
          id="tag"
          onChange={onChange}
          style={{ width: "10rem", height: "38px" }}
          placeholder="Default Tag: General"
        />
      </div>
      <form className="my-2">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title...
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
            onChange={onChange}
          />
          <div
            id="titleHelp"
            className={`form-text text-${mode === "dark" ? "light" : "dark"}`}
          >
            We'll never share your Notes with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description...
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={onChange}
            name="description"
          />
        </div>
        <button type="submit" onClick={alertMsg} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
