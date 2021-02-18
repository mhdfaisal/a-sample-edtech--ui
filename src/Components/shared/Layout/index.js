import React from 'react';

import SideBar from '../Sidebar';

import './layout-styles.css';

const Layout = (props) => {
	return (
		<section className='layout__container'>
			<SideBar />
			{props.children}
		</section>
	);
};

export default Layout;
