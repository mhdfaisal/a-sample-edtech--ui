const validate = (value, rules) => {
	let isValid = true;
	for (let rule in rules) {
		switch (rule) {
			case 'required':
				isValid = isValid && isNotEmpty(value);
				break;
			default:
				isValid = false;
		}
	}
	return isValid;
};

const isNotEmpty = (value) => {
	return value.trim().length > 0;
};

export default validate;
