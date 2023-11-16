import React, { useState } from 'react'
import NoteListItem from './NoteLisItem'

import InfoNote from './InfoNote'

const NoteList = props => {
	const [activeCategory, setActiveCategory] = useState('wszystkie')

	const handleActiveCategory = category => {
		setActiveCategory(category)
	}

	console.log(activeCategory)

	const noteListAll = props.listNote.map(note => {
		return (
			<div key={note.id}>
				<NoteListItem note={note} deleteNote={props.deleteNote} />
			</div>
		)
	})
	const noteListHome = props.home.map(note => {
		return (
			<div key={note.id}>
				<NoteListItem note={note} deleteNote={props.deleteNote} />
			</div>
		)
	})
	const noteListJob = props.job.map(note => {
		return (
			<div key={note.id}>
				<NoteListItem note={note} deleteNote={props.deleteNote} />
			</div>
		)
	})
	const noteListEntertainment = props.entertainment.map(note => {
		return (
			<div key={note.id}>
				<NoteListItem note={note} deleteNote={props.deleteNote} />
			</div>
		)
	})

	return (
		<div>
			<InfoNote activeCategory={handleActiveCategory} note={props.listNote} />
			<div className='notelist'>
				{activeCategory === 'wszystkie' ? noteListAll : null}
				{activeCategory === 'dom' ? noteListHome : null}
				{activeCategory === 'praca' ? noteListJob : null}
				{activeCategory === 'rozrywka' ? noteListEntertainment : null}
			</div>
		</div>
	)
}

export default NoteList
