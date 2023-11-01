import React from 'react'

const NoteListItem = props => {
	return (
		<div className='notelist'>
			<p className='notelistview'>{props.note.value}</p>
		</div>
	)
}

export default NoteListItem
