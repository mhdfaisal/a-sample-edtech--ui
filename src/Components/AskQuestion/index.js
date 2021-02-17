import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../shared/Button';
import TextInput from '../shared/TextInput';
import useInputHook, { TEXT_INPUT_INIT_STATE } from '../../hooks/useInputHook';

import './ask-question-style.css';

const AskQuestion = () => {
	const [inputState, onInputChange] = useInputHook({
		...TEXT_INPUT_INIT_STATE,
		label: 'Título de publicación',
		placeholder: 'Escribe tu título aquí',
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
				<TextInput {...inputState} onChange={onInputChange} />
			</form>
		</section>
	);
};

AskQuestion.displayName = 'AskQuestion';

export default AskQuestion;
