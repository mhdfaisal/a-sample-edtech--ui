import React, { useContext, useLayoutEffect, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Button from '../shared/Button';
import TextInput from '../shared/TextInput';
import useFormHook from '../../hooks/useFormHook';
import { AppContext } from '../Context/AppContext';
import CloseIcon from '../../assets/images/ic_close_32.png';
import { LayoutContext } from '../Context/LayoutContext';

import './ask-question-style.css';

const AskQuestion = () => {
	const { storedItem, setValueInLS } = useContext(AppContext);
	const { showLayoutComponents, setShowLayoutComponent } = useContext(LayoutContext);

	const { formState, onInputChange } = useFormHook({
		inputs: {
			title: {
				name: 'title',
				value: '',
				errorMsg: '',
				validationRules: {
					required: true,
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
					required: true,
				},
				isValid: false,
				touched: false,
				label: 'Publicación',
				placeholder: 'Escribe tu publicación aquí',
			},
		},
		isValidForm: false,
	});

	const history = useHistory();

	const onCancelBtnClick = () => {
		history.goBack();
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (formState.isValidForm) {
			let newItems = storedItem?.new ?? [];
			let popularItems = storedItem?.popular ?? [];
			const newQuestion = {
				id: new Date().getTime(),
				name: 'Test User',
				question: formState?.inputs?.title?.value,
				description: formState?.inputs?.description?.value,
				comments_count: Math.floor(Math.random() * 200) + 1,
				disliked: !!Math.floor(Math.random() * Math.floor(5)),
				favorite: !!Math.floor(Math.random() * Math.floor(5)),
				group: 'Matemáticas 6º',
				thread: 'juan.c23 en',
				liked: !!Math.floor(Math.random() * Math.floor(5)),
				createdAt: new Date(),
			};
			newItems = [{ ...newQuestion }, ...newItems];
			popularItems = [{ ...newQuestion }, ...popularItems];
			setValueInLS({ ...storedItem, new: newItems, popular: popularItems });
			history.push('/');
		}
	};

	useLayoutEffect(() => {
		if (window) {
			if (window.innerWidth <= 768 && showLayoutComponents?.showTopBar) {
				setShowLayoutComponent({ ...showLayoutComponents, showTopBar: false });
			} else if (window.innerWidth > 768 && !showLayoutComponents?.showTopBar) {
				setShowLayoutComponent({ ...showLayoutComponents, showTopBar: true });
			}
		}
	});

	// on un-mount

	useEffect(() => {
		return () => {
			setShowLayoutComponent({ ...showLayoutComponents, showTopBar: true });
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<section className='ask__question'>
			<header className='ask__question__header'>
				<h2 className='ask__question__title'>Haz una pregunta</h2>
				<div className='ask__question__cancel-btn'>
					<div className='ask__question__cancel-btn-big'>
						<Button onClick={onCancelBtnClick}>cancelar</Button>
					</div>
					<span className='ask__question__cancel-btn-small'>
						<Link to='/'>
							<img src={CloseIcon} alt='close-icon' />
						</Link>
					</span>
				</div>
			</header>
			<form className='ask__question__form' onSubmit={onFormSubmit}>
				<div className='ask__question__form-field'>
					<TextInput {...formState.inputs.title} onChange={onInputChange} isMultiLine />
				</div>
				<div className='ask__question__form-field'>
					<TextInput {...formState.inputs.description} onChange={onInputChange} />
				</div>
				<div className='ask__question__form-button'>
					<Button type='submit' disabled={!formState.isValidForm}>
						publicar
					</Button>
				</div>
			</form>
		</section>
	);
};

AskQuestion.displayName = 'AskQuestion';

export default AskQuestion;
