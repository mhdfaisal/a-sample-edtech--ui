import { useReducer } from 'react';

export const TEXT_INPUT_INIT_STATE = {
	label: '',
	value: '',
	errorMsg: '',
	validationRules: {
		isRequired: true,
	},
	isValid: false,
	touched: false,
	placeholder: '',
};

export const INPUT_ACTION_TYPES = {
	INPUT_VALUE_CHANGE: 'input_value_change',
};

const reducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case INPUT_ACTION_TYPES.INPUT_VALUE_CHANGE: {
			const { value } = payload;
			return { ...state, value };
		}
		default:
			return state;
	}
};

const useInputHook = (initialState) => {
	const [inputState, setInputState] = useReducer(reducer, {
		...(initialState || { ...TEXT_INPUT_INIT_STATE }),
	});

	const onInputChange = (e) => {
		setInputState({
			type: INPUT_ACTION_TYPES.INPUT_VALUE_CHANGE,
			payload: { value: e.target.value },
		});
	};

	return [inputState, onInputChange];
};

export default useInputHook;
