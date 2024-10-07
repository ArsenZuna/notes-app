import React, { useState } from "react";
import Notes from "./Notes.jsx";
import Note from "./Note.jsx";
import { notesData } from "../utils/data.jsx";
import AddNote from "./AddNote.jsx";

const Homepage = () => {
	const [selectedNote, setSelectedNote] = useState(null);
	const [isAddingNote, setIsAddingNote] = useState(false);
	const [notes, setNotes] = useState(notesData);

	const handleNoteClick = (note) => {
		setSelectedNote(note);
		setIsAddingNote(false);
	};

	const handleAddNoteClick = () => {
		setIsAddingNote(true);
	};

	const handleSaveNewNote = (newNote) => {
		setNotes([...notes, newNote]);
		setIsAddingNote(false);
	};

	const handleDeleteNote = (noteId) => {
		const updatedNotes = notes.filter((note) => note.id !== noteId);
		setNotes(updatedNotes);
		setSelectedNote(null);
	};

	return (
		<>
			<div className="container flex flex-col md:flex-row flex-1 mx-auto my-24 justify-center items-center md:justify-between align-middle p-4 md:p-8 max-w-7xl w-full">
				<Notes notesData={notes} onNoteClick={handleNoteClick} onAddNoteClick={handleAddNoteClick} />
				{!isAddingNote ? (
					<Note note={selectedNote} onDeleteNote={handleDeleteNote} />
				) : (
					<AddNote onSave={handleSaveNewNote} />
				)}
			</div>
		</>
	);
};

export default Homepage;
