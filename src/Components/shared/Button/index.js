import React from 'react';

import './button.css';

const Button = ({ children, disabled, ...rest }) => {
	return (
		<button {...rest} className={`custom__btn ${disabled ? 'custom__btn--disabled' : ''}`}>
			{children}
		</button>
	);
};

Button.displayName = 'Button';

export default Button;
