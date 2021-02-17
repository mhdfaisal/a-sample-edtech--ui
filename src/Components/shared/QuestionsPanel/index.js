import React, { useContext } from 'react';

import QuestionCard from '../QuestionCard';
import { AppContext } from '../../Context/AppContext';

const QuestionsPanel = ({ data }) => {
	const { isLoading, success, errorMsg } = useContext(AppContext);
	return (
		<>
			{isLoading && <div>Loading...</div>}
			{!success && errorMsg && <div>{errorMsg}</div>}
			{data && success && !isLoading && (
				<div className='questions__panel-container'>
					{data?.map((question) => (
						<QuestionCard questionItem={question} key={question?.id} />
					))}
				</div>
			)}
		</>
	);
};

QuestionsPanel.displayName = 'QuestionsPanel';

export default QuestionsPanel;
