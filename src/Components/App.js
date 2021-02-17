import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import AskQuestion from './AskQuestion';
import Community from './Community';
import PageNotFound from './PageNotFound';
import useLocalStorage from '../hooks/useLocalStorage';
import { DUMMY_API_BASE_URL } from '../utils/api-constants';
import { AppContext } from '../Components/Context/AppContext';

const App = () => {
	const [storedItem, setValueInLS] = useLocalStorage('lucaQuestions');
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
	const [success, setSuccess] = useState(true);

	console.log(storedItem);

	const fetchQuestionFromAPI = async () => {
		if (!storedItem) {
			setIsLoading(true);
			setSuccess(false);
			try {
				const result = await axios.get(`${DUMMY_API_BASE_URL}/db`);
				const data = await result?.data;
				console.log(data);
				setValueInLS(data);
				setIsLoading(false);
				setSuccess(true);
			} catch (err) {
				setIsLoading(false);
				setErrorMsg(err.message);
				setSuccess(false);
				console.log(err);
			}
		}
	};

	useEffect(() => {
		fetchQuestionFromAPI();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<AppContext.Provider
			value={{
				storedItem,
				setValueInLS,
				isLoading,
				success,
				errorMsg,
			}}
		>
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
		</AppContext.Provider>
	);
};

export default App;
