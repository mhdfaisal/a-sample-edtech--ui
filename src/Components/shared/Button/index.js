import React from 'react';

import './button.css';

const Button = ({ children, ...rest }) => {
	return (
		<button {...rest} className='custom__btn'>
			{children}
		</button>
	);
};

Button.displayName = 'Button';

export default Button;
