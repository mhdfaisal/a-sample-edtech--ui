import React from 'react';

import MoreIcon from '../../../assets/images/ic_chevronmore_16.png';
import './explorer-styles.css';

const Explorer = () => {
	return (
		<div className='explorer__btn'>
			<div className='explorer__btn__text'>Explorar</div>
			<div className='explorer__btn__icon'>
				<img src={MoreIcon} alt='explorer-icon' />
			</div>
		</div>
	);
};

export default Explorer;
