import React from 'react';

import Button from '../shared/Button';

import './community-header.css';

const CommunityHeader = () => {
	return (
		<header className='community__header'>
			<h2 className='community__header__title'>communidad luca</h2>
			<span className='community__header__btn'>
				<Button>nueva pregunta</Button>
			</span>
		</header>
	);
};

export default CommunityHeader;
