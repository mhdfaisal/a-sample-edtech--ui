import React from 'react';

import './tab-item-style.css';

const DefaultTabComponent = ({ label, value, index, onChange }) => {
	return (
		<li
			className={`tab__list__item ${value === index && 'tab__list__item--active'}`}
			onChange={onChange}
		>
			{label}
		</li>
	);
};

const UserProvidedTabComponent = (props) => {
	const { label, value, component, to, onChange, index } = props;
	if (to) {
		return (
			<li className={`tab__list__item ${value === to && 'tab__list__item--active'}`}>
				{React.cloneElement(component, { to }, [label])}
			</li>
		);
	}
	return (
		<li className={`tab__list__item ${value === index && 'tab__list__item--active'}`}>
			{React.cloneElement(component, { onChange }, [label])}
		</li>
	);
};

const Tab = (props) => {
	const { component } = props;
	if (component) {
		return <UserProvidedTabComponent {...props} />;
	}
	return <DefaultTabComponent {...props} />;
};

export default Tab;
