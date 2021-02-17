const stringHelpers = {
	getTrimmedString: (string = '') => {
		const stringLength = string?.length;
		const stringToTrimIndex = stringLength > 70 ? 65 : stringLength;
		if (stringToTrimIndex === stringLength) {
			return string;
		}
		const trimmedString = `${string.substring(0, stringToTrimIndex)}...`;
		return trimmedString;
	},
};

export default stringHelpers;
