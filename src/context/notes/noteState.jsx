import NoteContext from "./noteContext";

import React, { useState } from "react";

export default function NoteState(props) {
  // data
  const s1 = {
    name: "Abdulla",
    class: "5b",
  };
  // Setting state for data
  const [state, setState] = useState(s1);

  // Update function
  const update = () => {
    //after 2 sec update s1
    setTimeout(() => {
      //update state
      setState({
        name: "Patan Abdulla",
        class: "20b",
      });
    }, 2000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
}
