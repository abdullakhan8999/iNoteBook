import noteContext from "../context/notes/noteContext";
import React, { useContext, useState } from "react";

export default function AddNote({ showAlert }) {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { addNote, mode } = useContext(noteContext);

  const alertMsg = (event) => {
    event.preventDefault();
    showAlert("primary", "Note submitted.");
    if (!note.title || !note.description) {
      return showAlert(
        `warning`,
        `Please Enter ${!note.title ? "title" : "description"}`
      );
    }
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-4 text-capitalize">Add a note</h3>
        <div className="">
          <input
            type="text"
            name="tag"
            className={`form-control  bg-${
              mode === "dark" ? "black" : "body-secondary"
            } border border-${mode === "dark" ? "light" : "dark"} text-${
              mode === "dark" ? "light" : "dark"
            } `}
            id="tag"
            onChange={onChange}
            aria-describedby="tagHelp"
            style={{
              width: "10rem",
              height: "38px",
              placeholderColor: "white",
            }}
            // placeholder="Default Tag: General"
          />
          <div
            id="tagHelp"
            className={`form-text text-${mode === "dark" ? "light" : "dark"}`}
          >
            Default Tag: General...
          </div>
        </div>
      </div>
      <form className="my-2">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title...
          </label>
          <input
            type="text"
            name="title"
            className={`form-control bg-${
              mode === "dark" ? "black" : "body-secondary"
            } border border-${mode === "dark" ? "light" : "dark"} text-${
              mode === "dark" ? "light" : "dark"
            }`}
            id="title"
            aria-describedby="titleHelp"
            onChange={onChange}
            value={note.title}
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
            className={`form-control bg-${
              mode === "dark" ? "black" : "body-secondary"
            } border border-${mode === "dark" ? "light" : "dark"} text-${
              mode === "dark" ? "light" : "dark"
            }`}
            id="description"
            onChange={onChange}
            name="description"
            value={note.description}
          />
        </div>
        <button type="submit" onClick={alertMsg} className="btn btn-primary">
          Add Note
        </button>
      </form>
    </>
  );
}
