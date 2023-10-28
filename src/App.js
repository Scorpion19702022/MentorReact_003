import React, { useState } from 'react'
import './Styles/App.css'

import Modal from './components/Modal'
import NoteList from './components/NoteList'
import SiteBar from './components/SiteBar'

const App = () => {
	const [isModal, setIsModal] = useState(false)
	const [notes, setNotes] = useState([])

	const handleCheckModal = () => {
		setIsModal(true)
	}

	const handleChange = note => {
		setNotes([...notes, note])
		console.log(notes)
	}

	return (
		<div className='App'>
			<SiteBar click={handleCheckModal} />
			<NoteList listNote={notes} />
			{isModal ? <Modal change={handleChange} /> : null}
		</div>
	)
}

export default App
