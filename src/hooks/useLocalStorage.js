import { useState } from 'react';

const useLocalStorage = (key = null) => {
	const [storedItem, setStoredItem] = useState(() => {
		if (window && key) {
			const item = window.localStorage.getItem(key);
			if (item) {
				return JSON.parse(item);
			}
		}
		return null;
	});

	const setValueInLS = (value) => {
		if (value) {
			window.localStorage.setItem(key, JSON.stringify(value));
			setStoredItem(value);
		}
	};
	return [storedItem, setValueInLS];
};

export default useLocalStorage;
