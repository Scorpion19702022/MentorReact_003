import React from 'react'

const NoteListItem = props => {
	return (
		<div className='notelistview'>
			<p>{props.note.value}</p>
		</div>
	)
}

export default NoteListItem
