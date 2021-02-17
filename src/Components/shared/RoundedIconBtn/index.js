import React from 'react';

import './rounded-icon-btn-styles.css';

const RoundedIconBtn = ({ children, ...rest }) => {
	return (
		<button {...rest} className='rounded__icon__btn'>
			{children}
		</button>
	);
};

export default RoundedIconBtn;
