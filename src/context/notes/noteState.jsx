import NoteContext from "./noteContext";
import React, { useState } from "react";

export default function NoteState(props) {
const [notes, setNotes] = useState([
  {
    _id: "63d66af7498dea1bb7e444f4",
    user: "63d66ad2498dea1bb7e444f1",
    title: "One Path",
    description:
      "myBook is a book, That says about the one path Through which we can achieve success.",
    tag: "General",
    date: "2023-01-29T12:47:51.909Z",
    __v: 0,
  },
  {
    _id: "63d66b1c498dea1bb7e444f7",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-29T12:48:28.243Z",
    __v: 0,
  },
  {
    _id: "63d8a4c49a4d715c4f5d63dc",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-31T05:19:00.806Z",
    __v: 0,
  },
  {
    _id: "63d8a4e19a4d715c4f5d63e0",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-31T05:19:29.273Z",
    __v: 0,
  },
  {
    _id: "63d8a4e19a4d715c4f5d63e2",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-31T05:19:29.759Z",
    __v: 0,
  },
  {
    _id: "63d8a4e29a4d715c4f5d63e4",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-31T05:19:30.064Z",
    __v: 0,
  },
  {
    _id: "63d8a4e29a4d715c4f5d63e6",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-31T05:19:30.259Z",
    __v: 0,
  },
  {
    _id: "63d8a4e79a4d715c4f5d63ea",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-31T05:19:35.448Z",
    __v: 0,
  },
  {
    _id: "63d8a4e79a4d715c4f5d63ec",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-31T05:19:35.615Z",
    __v: 0,
  },
  {
    _id: "63d8a4e89a4d715c4f5d63ee",
    user: "63d66ad2498dea1bb7e444f1",
    title: "Abdulla",
    description: "My Life",
    tag: "General",
    date: "2023-01-31T05:19:36.109Z",
    __v: 0,
  },
]);
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
}
