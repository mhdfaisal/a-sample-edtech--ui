import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AskQuestion from './AskQuestion';

import Community from './Community';
import PageNotFound from './PageNotFound';
import useLocalStorage from '../hooks/useLocalStorage';

const App = () => {
	const [storedItem, setValueInLS] = useLocalStorage('lucaQuestions');
	return (
		<Switch>
			<Route path='/ask' exact>
				<AskQuestion />
			</Route>
			<Route path='/notfound' exact>
				<PageNotFound />
			</Route>
			<Route path='/'>
				<Community />
			</Route>
		</Switch>
	);
};

export default App;
