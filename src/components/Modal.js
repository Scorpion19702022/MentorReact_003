import React, { useState } from 'react'

const Modal = props => {
	const [termNote, setTermNote] = useState('')
	const [selectCategory, setSelectCategory] = useState('change')

	const addNotes = selectCategory => {
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

		const rightMinute = minute > 9 ? `${minute}` : `0${minute}`
		const rightSecond = second > 9 ? `${second}` : `0${second}`

		// console.log(day, month, year, hour, minute, second)

		const note = {
			id: Math.floor(Math.random() * 10000),
			value: termNote,
			category: selectCategory,
			date: `${day} ${month} ${year} ${hour}:${rightMinute}:${rightSecond}`,
		}
		props.change(note)
		resetNote()
		props.click('close')
	}

	const correctAdd = () => {
		if (termNote.length > 0 && selectCategory !== 'change') {
			addNotes(selectCategory)
		}
	}

	const resetNote = () => {
		setTermNote('')
	}

	return (
		<div className='boxmodal'>
			<div className='modal'>
				<span className='modalcross' onClick={() => props.click('close')}>
					X
				</span>
				<div className='modaltext'>
					<label>Dodaj notatkę</label>
					<textarea placeholder='wpisz notatkę' value={termNote} onChange={e => setTermNote(e.target.value)}></textarea>
				</div>
				<div className='boxselect'>
					<label>
						<select name='kategoria' value={selectCategory} onChange={e => setSelectCategory(e.target.value)}>
							<option value='change'>wybierz</option>
							<option value='home'>dom</option>
							<option value='job'>praca</option>
							<option value='entertaiment'>rozrywka</option>
						</select>
					</label>
					<button className='modalbtn' onClick={correctAdd}>
						Dodaj notatkę
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
