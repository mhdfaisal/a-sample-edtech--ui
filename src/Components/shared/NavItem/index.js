import React from 'react';
import { Link } from 'react-router-dom';

import './navlink-styles.css';

const NavItem = ({ to = '/', icon = false, isActive, text = false, ...rest }) => {
	return (
		<span className='nav__item'>
			<Link
				to={to}
				{...rest}
				className={`nav__item__link ${isActive ? 'nav__item__link--active' : ''}`}
			>
				{icon && <img src={icon} alt='nav-icon' className='nav__item__image' />}
				{text && <span className='nav__item__text'>{text}</span>}
			</Link>
		</span>
	);
};

export default NavItem;
