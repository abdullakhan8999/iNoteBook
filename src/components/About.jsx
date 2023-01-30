import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";


export default function About() {
  const s1 = useContext(noteContext);
  useEffect(() => {
     s1.update();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="text-center">
      This is about and his name is { s1.state.name} and Class is { s1.state.class}
    </div>
  );
}
