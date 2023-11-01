import React, { useState } from 'react'

const Modal = props => {
	const [termNote, setTermNote] = useState('')

	const addNotes = () => {
		console.log(termNote)
		const date = new Date()

		const months = [
			'styczeń',
			'luty',
			'marzec',
			'maj',
			'czerwiec',
			'lipiec',
			'sierpień',
			'wrzesień',
			'październik',
			'listopad',
			'grudzień',
		]

		const day = date.getDate()
		const month = months[date.getMonth() - 1]
		const year = date.getFullYear()
		const hour = date.getHours()
		const minute = date.getMinutes()
		const second = date.getSeconds()

		console.log(day, month, year, hour, minute, second)

		const note = {
			id: Math.floor(Math.random() * 10000),
			value: termNote,
			date: `${day} ${month} ${year} ${hour}:${minute}:${second}`,
		}
		props.change(note)
		resetNote()
	}

	const resetNote = () => {
		setTermNote('')
	}

	return (
		<div className='modal'>
			<div className='modaltext'>
				<label>Dodaj notatkę</label>
				<textarea placeholder='wpisz notatkę' value={termNote} onChange={e => setTermNote(e.target.value)}></textarea>
			</div>
			<button className='modalbtn' onClick={addNotes}>
				Dodaj notatkę
			</button>
		</div>
	)
}

export default Modal
