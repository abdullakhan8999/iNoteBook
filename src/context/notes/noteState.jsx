import NoteContext from "./noteContext";
import React, { useState } from "react";

export default function NoteState(props) {
  //mode changer
  const [mode, setMode] = useState("dark");

  //alert
  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    console.log("Hello", alert);
  };

  //notes
  const [notes, setNotes] = useState([]);

  // add note
  const addNote = (title, description, tag) => {
    //todo api call
    const note = {
      _id: "63d66af7498dea1bb7e444f4",
      user: "63d66ad2498dea1bb7e444f1",
      title: title,
      description: description,
      tag: tag === "" ? "General" : tag,
      date: "2023-01-29T12:47:51.909Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // edit note
  const editNote = () => {};

  // delete note
  const deleteNote = () => {};

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        addNote,
        editNote,
        deleteNote,
        mode,
        setMode,
        alert,
        showAlert,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
