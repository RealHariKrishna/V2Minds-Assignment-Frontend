import React from "react";
import "./Note.css";

const Note = ({ note, deleteNote }) => {
  return (
    <div className="Note">
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note._id)}>Delete</button>
    </div>
  );
};

export default Note;
