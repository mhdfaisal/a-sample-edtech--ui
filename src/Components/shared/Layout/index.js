import React from 'react';

import SideBar from '../Sidebar';
import TopBar from '../TopBar';

import './layout-styles.css';

const Layout = (props) => {
	return (
		<section className='layout__container'>
			<SideBar />
			<section className='layout__container-component'>
				<TopBar />
				{props.children}
			</section>
		</section>
	);
};

export default Layout;
