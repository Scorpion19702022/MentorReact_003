import React, { useEffect, useState } from 'react'

const InfoNote = props => {
	const [activeClass, setActiveClass] = useState('wszystkie')
	const [activeCategoryNotes, setActiveCategoryNotes] = useState(props.note)

	const handleChangeClassBtn = category => {
		setActiveClass(category)
		props.activeCategory(category)
	}

	useEffect(() => {
		if (activeClass === 'wszystkie') {
			setActiveCategoryNotes(props.note)
		} else if (activeClass === 'dom') {
			setActiveCategoryNotes(props.note.filter(item => item.category === 'home'))
		} else if (activeClass === 'praca') {
			setActiveCategoryNotes(props.note.filter(item => item.category === 'job'))
		} else if (activeClass === 'rozrywka') {
			setActiveCategoryNotes(props.note.filter(item => item.category === 'entertainment'))
		}
	}, [activeClass, props.note])

	return (
		<div className='box-info'>
			<div className='box-btn'>
				<button
					onClick={() => handleChangeClassBtn('wszystkie')}
					className={activeClass === 'wszystkie' ? 'active' : 'allbtn'}
				>
					Wszystkie
				</button>
				<button onClick={() => handleChangeClassBtn('dom')} className={activeClass === 'dom' ? 'active' : 'allbtn'}>
					Dom
				</button>
				<button onClick={() => handleChangeClassBtn('praca')} className={activeClass === 'praca' ? 'active' : 'allbtn'}>
					Praca
				</button>
				<button
					onClick={() => handleChangeClassBtn('rozrywka')}
					className={activeClass === 'rozrywka' ? 'active' : 'allbtn'}
				>
					Rozrywka
				</button>
			</div>
			<div className='box-calclulate'>
				<h2 className='heading-info-all'>Ilość notatek ({activeCategoryNotes.length})</h2>
			</div>
		</div>
	)
}

export default InfoNote
