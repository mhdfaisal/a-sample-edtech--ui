import React, { useContext } from 'react';

import QuestionsPanel from '../shared/QuestionsPanel';
import { AppContext } from '../Context/AppContext';

const PopularQuestions = () => {
	const { storedItem } = useContext(AppContext);
	const { popular = [] } = storedItem ?? {};
	return <QuestionsPanel data={popular} />;
};

export default PopularQuestions;
