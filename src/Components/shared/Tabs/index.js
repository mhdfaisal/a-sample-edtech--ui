import React from 'react';

const Tabs = (props) => {
	const { value, onChange = false } = props;
	return (
		<ul>
			{props.children?.map((childElement) => {
				return React.cloneElement(childElement, {
					value,
					onChange: onChange || undefined,
					key: childElement.props?.label,
				});
			})}
		</ul>
	);
};

Tabs.displayName = 'Tabs';

export default Tabs;
