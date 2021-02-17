import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../shared/Button';
import TextInput from '../shared/TextInput';
import useFormHook from '../../hooks/useFormHook';

import './ask-question-style.css';

const AskQuestion = () => {
	const { formState, onInputChange } = useFormHook({
		title: {
			name: 'title',
			value: '',
			errorMsg: '',
			validationRules: {
				isRequired: true,
			},
			isValid: false,
			touched: false,
			label: 'Título de publicación',
			placeholder: 'Escribe tu título aquí',
		},
		publication: {
			name: 'publication',
			value: '',
			errorMsg: '',
			validationRules: {
				isRequired: true,
			},
			isValid: false,
			touched: false,
			label: 'Publicación',
			placeholder: 'Escribe tu publicación aquí',
		},
	});

	const history = useHistory();

	const onCancelBtnClick = () => {
		history.goBack();
	};
	return (
		<section className='ask__question'>
			<header className='ask__question__header'>
				<h2 className='ask__question__title'>Haz una pregunta</h2>
				<div>
					<Button onClick={onCancelBtnClick}>cancelar</Button>
				</div>
			</header>
			<form className='ask__question__form'>
				<TextInput {...formState.title} onChange={onInputChange} isMultiLine />
				<TextInput {...formState.publication} onChange={onInputChange} />
			</form>
		</section>
	);
};

AskQuestion.displayName = 'AskQuestion';

export default AskQuestion;
