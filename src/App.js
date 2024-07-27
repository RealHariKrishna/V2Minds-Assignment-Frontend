import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "./components/NoteList";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import "./App.css";

const App = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "https://v2minds-assignment-backend.onrender.com/api/notes"
      );
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
      toast.error("Error while getting saved notes");
    }
  };

  const saveNote = async () => {
    try {
      const response = await axios.post(
        "https://v2minds-assignment-backend.onrender.com/api/notes",
        {
          content: note,
        }
      );
      setNotes([...notes, response.data]);
      setNote("");
      toast.success("Note saved successfully");
    } catch (error) {
      console.error("Error saving note:", error);
      toast.error("Error while saving a note");
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(
        `https://v2minds-assignment-backend.onrender.com/api/notes/${id}`
      );
      setNotes(notes.filter((note) => note._id !== id));
      toast.success("Deleted successfully");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Error!! can't delete");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="App">
      <Toaster />
      <h1>Notes App</h1>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter your note"
      />
      <button onClick={saveNote}>Save Note</button>
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
