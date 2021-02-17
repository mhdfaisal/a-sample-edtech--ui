import { useReducer } from 'react';

import validate from '../utils/validate';

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
			const validationRules = state.inputs[inputName]?.validationRules ?? {};
			const isValid = validate(value, validationRules);
			let formIsValid = true;
			// validate overall form validity
			for (let input in state.inputs) {
				if (input === inputName) {
					formIsValid = formIsValid && isValid;
				} else {
					formIsValid = formIsValid && state.inputs[input].isValid;
				}
			}
			return {
				...state,
				inputs: {
					...state.inputs,
					[inputName]: { ...state.inputs[inputName], value, isValid, touched: true },
				},
				isValidForm: formIsValid,
			};
		}
		default:
			return state;
	}
};

const useFormHook = (initialState) => {
	const [formState, setFormState] = useReducer(formReducer, {
		...initialState,
	});

	const onInputChange = (e) => {
		setFormState({ type: FORM_ACTION_TYPES.INPUT_VALUE_CHANGE, payload: { event: e } });
	};

	return { formState, setFormState, onInputChange };
};

export default useFormHook;
