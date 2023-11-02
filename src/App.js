import React, { useState } from 'react'
import './Styles/App.css'

import Modal from './components/Modal'
import NoteList from './components/NoteList'
import SiteBar from './components/SiteBar'

const App = () => {
	const [isModal, setIsModal] = useState(false)
	const [notes, setNotes] = useState([])

	const handleCheckModal = type => {
		if (type === 'open') {
			setIsModal(true)
		} else {
			setIsModal(false)
		}
	}

	const handleChange = note => {
		setNotes([...notes, note])
		console.log(notes)
	}

	const deleteNote = id => {
		const deleteNote = notes.filter(note => note.id !== id)
		setNotes(deleteNote)
	}

	return (
		<div className='App'>
			<SiteBar click={handleCheckModal} />
			<div className='boxcontent'>
				{isModal ? <Modal change={handleChange} click={handleCheckModal} /> : null}
				<NoteList listNote={notes} deleteNote={deleteNote} />
			</div>
		</div>
	)
}

export default App
