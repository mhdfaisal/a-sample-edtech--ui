import React from 'react';
import { Link } from 'react-router-dom';

import './navlink-styles.css';

const NavItem = ({ to = '/', icon, isActive, text, ...rest }) => {
	return (
		<span className='nav__item'>
			<Link
				to={to}
				{...rest}
				className={`nav__item__link ${isActive ? 'nav__item__link--active' : ''}`}
			>
				<img src={icon} alt='nav-icon' className='nav__item__image' />
				<span className='nav__item__text'>{text}</span>
			</Link>
		</span>
	);
};

export default NavItem;
