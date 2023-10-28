import React from 'react'
import PlusLogo from '../assets/plus.png'

const SiteBar = props => {
	return (
		<div>
			<button className='btnOpenModal' onClick={props.click}>
				<img src={PlusLogo} alt='logo' />
			</button>
		</div>
	)
}

export default SiteBar
