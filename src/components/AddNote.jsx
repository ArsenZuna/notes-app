import { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { notesData } from "../utils/data.jsx";

const AddNote = ({ onSave }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSaveClick = () => {
		const newNote = {
			id: Math.max(notesData.length + 1),
			title,
			content,
			date_created: new Date().toISOString().split('T')[0],
			date_modified: new Date().toISOString().split('T')[0],
		};
		onSave(newNote);
	};

	return (
		<motion.div
			variants={fadeIn('left')}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.4 }}
			className="container w-full md:w-2/3 h-[500px] md:h-[600px] p-5 bg-white overflow-y-auto"
		>
			<h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">Add a New Note</h2>
			<div className="mb-4">
				<input
					className="w-full text-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-700 italic transition duration-300"
					placeholder="Note Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<textarea
					className="w-full text-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-700 italic transition duration-300"
					placeholder="Note Content"
					rows="8"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</div>
			<div className="flex justify-center">
				<button
					className="px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-cyan-200 hover:text-black transition duration-200"
					onClick={handleSaveClick}
				>
					Save Note
				</button>
			</div>
		</motion.div>
	);
};

export default AddNote;
