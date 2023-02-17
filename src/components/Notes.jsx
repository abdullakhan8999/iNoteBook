import noteContext from "../context/notes/noteContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";

export default function Notes({ showAlert }) {
  const { notes, getAllNote, editNote } = useContext(noteContext);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });

  useEffect(() => {
    getAllNote();
  });

  useEffect(() => {
    getAllNote();
    // eslint-disable-next-lin
  }, [notes]);

  const updateNote = (note) => {
    ref.current.click();
    setNote({
      id: note._id,
      etitle: note.title,
      edescription: note.description,
      etag: note.tag,
    });
  };

  const noteEdited = () => {
    refClose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    showAlert("success", "Note is updated");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  <h2 className="text-capitalize">Your notes</h2>;

  return (
    <>
      <div className="row">
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Edit Note
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog text-black">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 " id="exampleModalLabel">
                  Edit Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-2">
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label fs-5">
                      Title
                    </label>
                    <input
                      type="text"
                      name="etitle"
                      className="form-control"
                      id="etitle"
                      aria-describedby="etitleHelp"
                      onChange={onChange}
                      value={note.etitle}
                    />
                    <div id="etitleHelp" className={`form-text text-black`}>
                      We'll never share your Notes with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label fs-5">
                      Tag
                    </label>
                    <input
                      type="text"
                      name="etag"
                      className="form-control"
                      id="etag"
                      onChange={onChange}
                      value={note.etag}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label fs-5">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      onChange={onChange}
                      name="edescription"
                      value={note.edescription}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={noteEdited}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>

        {notes.length === 0 ? (
          <h2 className="text-capitalize mt-2">
            Your notes collection is currently empty.
          </h2>
        ) : (
          <div className="row">
            <h2 className="text-capitalize">Notes Collection:</h2>
            {notes.map((note) => {
              return (
                <NoteItem
                  updateNote={updateNote}
                  showAlert={showAlert}
                  key={note._id}
                  note={note}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
