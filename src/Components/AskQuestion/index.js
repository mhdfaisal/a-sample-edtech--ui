import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../shared/Button';

import './ask-question-style.css';

const AskQuestion = () => {
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
			<form className='ask__question__form'></form>
		</section>
	);
};

AskQuestion.displayName = 'AskQuestion';

export default AskQuestion;
