import React from 'react';

export const AppContext = React.createContext({
	storedItem: null,
	setValueInLS: () => {},
	isLoading: false,
	success: false,
	errorMsg: null,
});
