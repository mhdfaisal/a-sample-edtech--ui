import React, { useContext } from 'react';

import QuestionsPanel from '../shared/QuestionsPanel';
import { AppContext } from '../Context/AppContext';

const NewQuestions = () => {
	const { storedItem } = useContext(AppContext);
	const newQuestions = storedItem?.new ?? [];
	return <QuestionsPanel data={newQuestions} />;
};

export default NewQuestions;
