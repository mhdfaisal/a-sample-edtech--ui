import React, { useContext } from 'react';

import QuestionCard from '../QuestionCard';
import { AppContext } from '../../Context/AppContext';
import SpinnerLoader from '../SpinnerLoader';

const QuestionsPanel = ({ data }) => {
	const { isLoading, success, errorMsg, storedItem, setValueInLS } = useContext(AppContext);

	const getFavoriteMarkedArray = (questionsArray = [], id) => {
		const questionIndex = questionsArray?.findIndex((question) => question?.id === id);
		const modifiedQuestions = [...questionsArray];
		if (questionIndex > -1) {
			modifiedQuestions[questionIndex] = {
				...modifiedQuestions[questionIndex],
				favorite: !modifiedQuestions[questionIndex]?.favorite,
			};
		}
		return modifiedQuestions;
	};

	// handler to mark or un-mark as favorite
	const onFavoriteBtnClick = (id) => {
		if (id) {
			let newItems = getFavoriteMarkedArray(storedItem?.new ?? [], id);
			let popularItems = getFavoriteMarkedArray(storedItem?.popular ?? [], id);
			let followedItems = getFavoriteMarkedArray(storedItem?.followed ?? [], id);

			setValueInLS({
				...storedItem,
				new: newItems,
				popular: popularItems,
				followed: followedItems,
			});
		}
	};

	return (
		<>
			{isLoading && <SpinnerLoader isLoading={isLoading} size={50} color='#3843D0' />}
			{!success && errorMsg && <div>{errorMsg}</div>}
			{data && success && !isLoading && (
				<div className='questions__panel-container'>
					{data?.map((question) => (
						<QuestionCard
							questionItem={question}
							key={question?.id}
							onFavoriteBtnClick={onFavoriteBtnClick}
						/>
					))}
				</div>
			)}
		</>
	);
};

QuestionsPanel.displayName = 'QuestionsPanel';

export default QuestionsPanel;
