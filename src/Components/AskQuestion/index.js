import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../shared/Button';
import TextInput from '../shared/TextInput';
import useFormHook from '../../hooks/useFormHook';
import { AppContext } from '../Context/AppContext';

import './ask-question-style.css';

const AskQuestion = () => {
	const { storedItem, setValueInLS } = useContext(AppContext);
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
		description: {
			name: 'description',
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

	const onFormSubmit = (e) => {
		e.preventDefault();
		let newItems = storedItem?.new ?? [];
		let popularItems = storedItem?.popular ?? [];
		const newQuestion = {
			id: new Date().getTime(),
			name: 'Test User',
			question: formState?.title?.value,
			description: formState?.description?.value,
			comments_count: Math.floor(Math.random() * 200) + 1,
			disliked: !!Math.floor(Math.random() * Math.floor(5)),
			favorite: !!Math.floor(Math.random() * Math.floor(5)),
			group: 'Matemáticas 6º',
			thread: 'Pregunta juan.c23 en',
			liked: !!Math.floor(Math.random() * Math.floor(5)),
			createdAt: new Date(),
		};
		newItems = [{ ...newQuestion }, ...newItems];
		popularItems = [{ ...newQuestion }, ...popularItems];
		setValueInLS({ ...storedItem, new: newItems, popular: popularItems });
		history.push('/');
	};

	return (
		<section className='ask__question'>
			<header className='ask__question__header'>
				<h2 className='ask__question__title'>Haz una pregunta</h2>
				<div>
					<Button onClick={onCancelBtnClick}>cancelar</Button>
				</div>
			</header>
			<form className='ask__question__form' onSubmit={onFormSubmit}>
				<div className='ask__question__form-field'>
					<TextInput {...formState.title} onChange={onInputChange} isMultiLine />
				</div>
				<div className='ask__question__form-field'>
					<TextInput {...formState.description} onChange={onInputChange} />
				</div>
				<div className='ask__question__form-button'>
					<Button type='submit'>publicar</Button>
				</div>
			</form>
		</section>
	);
};

AskQuestion.displayName = 'AskQuestion';

export default AskQuestion;
