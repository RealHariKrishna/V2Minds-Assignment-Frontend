import React from "react";
import Note from "./Note";
import "./NoteList.css";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="NoteList">
      <h2>Saved Notes</h2>
      {notes.map((note) => (
        <Note key={note._id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
