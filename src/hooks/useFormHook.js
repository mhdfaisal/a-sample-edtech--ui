import { useReducer, useState } from 'react';

export const FORM_ACTION_TYPES = {
	INPUT_VALUE_CHANGE: 'input_value_change',
};

const formReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case FORM_ACTION_TYPES.INPUT_VALUE_CHANGE: {
			const { event } = payload;
			const inputName = event.target.name;
			const value = event.target.value;
			return { ...state, [inputName]: { ...state[inputName], value } };
		}
		default:
			return state;
	}
};

const useFormHook = (initialState) => {
	const [isValidForm, setIsValidForm] = useState(false);
	const [formState, setFormState] = useReducer(formReducer, {
		...initialState,
	});

	const onInputChange = (e) => {
		setFormState({ type: FORM_ACTION_TYPES.INPUT_VALUE_CHANGE, payload: { event: e } });
	};

	return { formState, setFormState, onInputChange, isValidForm };
};

export default useFormHook;
