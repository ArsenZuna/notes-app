import React, { useState } from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../variants.js";

const Notes = ({ notesData, onNoteClick, onAddNoteClick }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredNotes = notesData.filter((note) =>
		note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
		note.content.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const searchHandler = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<motion.div
				variants={fadeIn('up')}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.4 }}
				className="container w-full md:w-1/3 h-[500px] md:h-[600px] mt-5 md:mt-0 bg-white overflow-y-auto border-r-2 border-b-2 border-r-gray-400 border-b-gray-400">
				<div className='flex justify-between items-center px-4 py-3 border-b'>
					<h2 className='font-semibold text-xl md:text-3xl'>All Notes</h2>
					<button
						className='rounded-full w-8 h-8 bg-black text-white font-bold hover:bg-cyan-200 hover:text-black transition duration-200'
						onClick={onAddNoteClick}
					>
						+
					</button>
				</div>

				{/* Search input */}
				<div className="px-4 py-2">
					<input
						className='w-full text-black rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700 italic transition duration-300'
						placeholder='Search notes by title or content'
						type='text'
						value={searchTerm}
						onChange={searchHandler}
					/>
				</div>

				{/* Notes List */}
				<div className='px-4 pt-2'>
					{filteredNotes.length > 0 ? (
						<ul role="list" className="divide-y divide-gray-100">
							{filteredNotes.map((note) => (
								<li
									key={note.id}
									className="flex justify-between gap-x-6 px-2 py-5 cursor-pointer rounded-xl hover:bg-cyan-200 transition duration-200"
									onClick={() => onNoteClick(note)}
								>
									<div className="flex min-w-0 gap-x-4">
										<div className="min-w-0 flex-auto">
											<p className="text-md font-semibold leading-6 text-gray-900">
												{note.title}
											</p>
											<p className="mt-1 truncate text-sm leading-5 text-gray-500">
												{note.content}
											</p>
										</div>
									</div>
									<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
										<p className="mt-1 text-xs leading-5 text-gray-500">
											Last modified{" "}
											<time dateTime={note.date_modified}>
												{note.date_modified}
											</time>
										</p>
										<p className="mt-1 text-xs leading-5 text-gray-500">
											Date created: {note.date_created}
										</p>
									</div>
								</li>
							))}
						</ul>
					) : (
						<div className="flex justify-center items-center font-semibold italic text-gray-500 m-7">
							No notes found.
						</div>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default Notes;
