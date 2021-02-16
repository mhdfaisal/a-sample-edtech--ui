import React from 'react';

import QuestionCard from '../QuestionCard';

const QuestionsPanel = ({ type }) => {
	return (
		<div className='questions__panel-container'>
			<QuestionCard />
		</div>
	);
};

QuestionsPanel.displayName = 'QuestionsPanel';

export default QuestionsPanel;
