import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../shared/Button';

import './community-header.css';

const CommunityHeader = () => {
	const history = useHistory();

	const onAskBtnClick = () => {
		history.push('/ask');
	};

	return (
		<header className='community__header'>
			<h2 className='community__header__title'>communidad luca</h2>
			<span className='community__header__btn'>
				<Button onClick={onAskBtnClick}>nueva pregunta</Button>
			</span>
		</header>
	);
};

export default CommunityHeader;
