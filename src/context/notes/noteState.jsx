import NoteContext from "./noteContext";
import React, { useState } from "react";

export default function NoteState(props) {
  const localhost = "http://localhost:8082";
  //mode changer
  const [mode, setMode] = useState("dark");

  
  //notes
  const [notes, setNotes] = useState([]);

  //fetch all notes
  const getAllNote = async () => {
    //api call
    const response = await fetch(`${localhost}/api/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlY2EyY2FjOTY4MDdkNjA3OGY4Y2ZkIn0sImlhdCI6MTY3NjQ1MjU4N30.fMNGVzqNbBfFZn8vnFcW-hlQf1XR9qRaX7JG0PgR76I",
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // add note
  const addNote = async (title, description, tag) => {
    tag = tag.length === 0 ? "General" : tag;
    //todo api call
    await fetch(`${localhost}/api/note/addnote`, {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlY2EyY2FjOTY4MDdkNjA3OGY4Y2ZkIn0sImlhdCI6MTY3NjQ1MjU4N30.fMNGVzqNbBfFZn8vnFcW-hlQf1XR9qRaX7JG0PgR76I",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: "63d66af7498dea1bb7e444f4",
      user: "63d66ad2498dea1bb7e444f1",
      title: title,
      description: description,
      tag: tag,
      date: "2023-01-29T12:47:51.909Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // edit note

  const editNote = async (id, title, description, tag) => {
    //api call
    await fetch(`${localhost}/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlY2EyY2FjOTY4MDdkNjA3OGY4Y2ZkIn0sImlhdCI6MTY3NjQ1MjU4N30.fMNGVzqNbBfFZn8vnFcW-hlQf1XR9qRaX7JG0PgR76I",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = await response.json();
    let NewNote = JSON.parse(JSON.stringify(notes));

    for (let i = 0; i < NewNote.length; i++) {
      if (NewNote[i]._id === id) {
        NewNote[i].title = title;
        NewNote[i].description = description;
        NewNote[i].tag = tag;
        break;
      }
    }
    setNotes(NewNote);
  };

  // delete note
  const deleteNote = async (id) => {
    await fetch(`${localhost}/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlY2EyY2FjOTY4MDdkNjA3OGY4Y2ZkIn0sImlhdCI6MTY3NjQ1MjU4N30.fMNGVzqNbBfFZn8vnFcW-hlQf1XR9qRaX7JG0PgR76I",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        const NewNotes = notes.filter((note) => note._id !== id);
        setNotes(NewNotes);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
        getAllNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
