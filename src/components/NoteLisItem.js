import React from 'react'
import DeleteIcon from '../assets/352303_delete_icon.png'

const NoteListItem = props => {
	// console.log(props)

	console.log(props.note)

	return (
		<div className={props.note.category}>
			<p>{props.note.value}</p>
			<div className='notebox'>
				<small>{props.note.date}</small>
				<button className='notebtn'>
					<img className='noteimg' src={DeleteIcon} alt='' onClick={() => props.deleteNote(props.note.id)} />
				</button>
			</div>
		</div>
	)
}

export default NoteListItem
