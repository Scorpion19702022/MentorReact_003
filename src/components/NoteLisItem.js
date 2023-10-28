import React from 'react'

const NoteListItem = props => {
	return (
		<div>
			<p>{props.note.value}</p>
		</div>
	)
}

export default NoteListItem
