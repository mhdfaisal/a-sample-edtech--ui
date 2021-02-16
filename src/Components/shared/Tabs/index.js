import React from 'react';

import './tabs-style.css';

const Tabs = (props) => {
	const { value, onChange = false } = props;
	return (
		<ul className='tabs__list__container'>
			{props.children?.map((childElement, index) => {
				return React.cloneElement(childElement, {
					value,
					index,
					onChange: onChange || undefined,
					key: childElement.props?.label,
				});
			})}
		</ul>
	);
};

Tabs.displayName = 'Tabs';

export default Tabs;
