import noteContext from "../context/notes/noteContext";
import React, { useContext } from "react";
import NoteItem from "./NoteItem";

export default function Notes({ showAlert }) {
  const context = useContext(noteContext);
  const { notes } = context;

  return (
    <div className="row">
      {notes.map((note) => {
        return <NoteItem showAlert={showAlert} key={note._id} note={note} />;
      })}
    </div>
  );
}
