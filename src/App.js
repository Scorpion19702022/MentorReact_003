import React, { useState } from 'react'
import './Styles/App.css'

import Modal from './components/Modal'
import NoteList from './components/NoteList'
import SiteBar from './components/SiteBar'

const App = () => {
	const [isModal, setIsModal] = useState(false)
	const [notes, setNotes] = useState([])

	const [selectCategory, setSelectCategory] = useState('change')

	const handleCheckModal = type => {
		if (type === 'open') {
			setIsModal(true)
		} else {
			setIsModal(false)
		}
	}

	const handleChange = note => {
		setNotes([...notes, note])
		// console.log(notes)
	}

	const deleteNote = id => {
		const deleteNote = notes.filter(note => note.id !== id)
		setNotes(deleteNote)
	}

	let addNewStyles

	if (selectCategory === 'home') {
		addNewStyles = 'notelistview1'
	} else if (selectCategory === 'job') {
		addNewStyles = 'notelistview2'
	} else if (selectCategory === 'entertainment') {
		addNewStyles = 'notelistview3'
	}

	console.log(addNewStyles)

	return (
		<div className='App'>
			<SiteBar click={handleCheckModal} />
			<div className='boxcontent'>
				{isModal ? (
					<Modal change={handleChange} click={handleCheckModal} select={selectCategory} newSelect={setSelectCategory} />
				) : null}
				<NoteList listNote={notes} deleteNote={deleteNote} styleAll={addNewStyles} />
			</div>
		</div>
	)
}

export default App
