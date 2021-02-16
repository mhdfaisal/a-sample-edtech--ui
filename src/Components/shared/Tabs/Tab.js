import React from 'react';

const DefaultTabComponent = ({ label, value, onChange }) => {
	return <li onChange={onChange}>{label}</li>;
};

const UserProvidedTabComponent = (props) => {
	const { label, value, component, to, onChange } = props;
	if (to) {
		return <li>{React.cloneElement(component, { to }, [label])}</li>;
	}
	return <li>{React.cloneElement(component, { onChange }, [label])}</li>;
};

const Tab = (props) => {
	const { component } = props;
	if (component) {
		return <UserProvidedTabComponent {...props} />;
	}
	return <DefaultTabComponent {...props} />;
};

export default Tab;
