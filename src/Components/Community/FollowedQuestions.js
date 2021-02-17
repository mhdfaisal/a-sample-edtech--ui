import React, { useContext } from 'react';

import QuestionsPanel from '../shared/QuestionsPanel';
import { AppContext } from '../Context/AppContext';

const FollowedQuestions = () => {
	const { storedItem = {} } = useContext(AppContext);
	const { followed = [] } = storedItem;
	return <QuestionsPanel data={followed} />;
};

export default FollowedQuestions;
