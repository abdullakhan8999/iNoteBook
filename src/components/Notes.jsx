import noteContext from "../context/notes/noteContext";
import React, { useContext } from "react";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  // eslint-disable-next-line
  setNotes(notes);

  return (
    <div className="row">
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />;
      })}
    </div>
  );
}
