import React from 'react'
import NoteListItem from './NoteLisItem'

const NoteList = props => {
	const noteListItem = props.listNote.map(note => {
		return (
			<div key={note.id}>
				<NoteListItem note={note} deleteNote={props.deleteNote} />
			</div>
		)
	})

	return <div className='notelist'>{noteListItem}</div>
}

export default NoteList
