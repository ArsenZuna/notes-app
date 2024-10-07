import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants.js";

const Note = ({ note, onDeleteNote }) => {
	if (!note) {
		return (
			<div className="container w-full md:w-2/3 h-[500px] md:h-[600px] flex items-center justify-center font-semibold font-xl text-gray-500 italic">
				Select a note to view details.
			</div>
		);
	}

	const handleDelete = () => {
		if (window.confirm("Are you sure you want to delete this note?")) {
			onDeleteNote(note.id);
		}
	};

	return (
		<motion.div
			variants={fadeIn('left')}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.4 }}
			className="container w-full md:w-2/3 h-[500px] md:h-[600px] p-5 bg-white overflow-y-auto">
			<h2 className="text-xl md:text-3xl font-semibold mb-3">{note.title}</h2>
			<p className="text-gray-700">{note.content}</p>
			<div className="mt-5 flex justify-end gap-x-3">
				<button
					className="px-4 py-2 bg-black text-white font-semibold rounded hover:bg-red-500 transition duration-200"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</motion.div>
	);
};

export default Note;
