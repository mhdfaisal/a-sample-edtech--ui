import React from 'react';

import './text-input-style.css';

const TextInput = (props) => {
	const { label, value, onChange, errorMsg, isValid, touched } = props;

	return (
		<>
			<label htmlFor='text-input' className='text__input__label'>
				{label}
				<input
					type='text'
					id='text-input'
					value={value}
					onChange={onChange}
					className='text__input__control'
				/>
			</label>
			{isValid && touched && <div className='text__input__error'>{errorMsg}</div>}
		</>
	);
};

TextInput.displayName = 'TextInput';

export default TextInput;
