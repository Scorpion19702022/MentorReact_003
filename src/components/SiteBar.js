import React from 'react'
import PlusLogo from '../assets/plus.png'

const SiteBar = props => {
	return (
		<div className='sitebar'>
			<button className='btnOpenModal' onClick={() => props.click('open')}>
				<img src={PlusLogo} alt='logo' />
			</button>
		</div>
	)
}

export default SiteBar
