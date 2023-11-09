import React, { useState } from 'react'

const InfoNote = props => {
	const [activeClass, setActiveClass] = useState('All')

	const handleChangeClassBtn = category => {
		setActiveClass(category)
		props.activeCategory(category)
	}

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
				<h2 className='heading-info-all'>Ilość notatek (0)</h2>
			</div>
		</div>
	)
}

export default InfoNote
