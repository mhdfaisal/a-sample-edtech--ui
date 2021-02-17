import React, { useContext } from 'react';

import QuestionCard from '../QuestionCard';
import { AppContext } from '../../Context/AppContext';
import SpinnerLoader from '../SpinnerLoader';

const QuestionsPanel = ({ data }) => {
	const { isLoading, success, errorMsg } = useContext(AppContext);
	return (
		<>
			{isLoading && <SpinnerLoader isLoading={isLoading} size={50} color='#3843D0' />}
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
