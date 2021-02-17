import React from 'react';

import './text-input-style.css';

const TextInput = (props) => {
	const {
		label,
		value,
		onChange,
		errorMsg,
		isValid,
		touched,
		placeholder,
		isMultiLine = false,
		name,
	} = props;

	return (
		<>
			<label htmlFor='text-input' className='text__input'>
				<span className='text__input__label-text'>{label}</span>
				{isMultiLine ? (
					<input
						type='text'
						id='text-input'
						value={value}
						onChange={onChange}
						className='text__input__control'
						placeholder={placeholder}
						name={name}
					/>
				) : (
					<textarea
						type='text'
						id='text-input'
						value={value}
						onChange={onChange}
						className='text__input__control-multiline'
						placeholder={placeholder}
						name={name}
					>
						{value}
					</textarea>
				)}
			</label>
			{isValid && touched && <div className='text__input__error'>{errorMsg}</div>}
		</>
	);
};

TextInput.displayName = 'TextInput';

export default TextInput;
