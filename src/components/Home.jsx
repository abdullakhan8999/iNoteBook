import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

export default function Home({ showAlert }) {
  return (
    <div className="mt-3" >
      <AddNote showAlert={showAlert} />
      <h2 className="text-capitalize">Your notes</h2>
      <Notes showAlert={showAlert} />
    </div>
  );
}
