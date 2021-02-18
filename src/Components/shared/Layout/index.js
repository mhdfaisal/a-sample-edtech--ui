import React, { useState } from 'react';
import MobileBottomNav from '../MobileBottomNav';

import SideBar from '../Sidebar';
import TopBar from '../TopBar';
import { LayoutContext } from '../../Context/LayoutContext';

import './layout-styles.css';

const Layout = (props) => {
	const [showLayoutComponents, setShowLayoutComponent] = useState(() => {
		return { showSideBar: true, showTopBar: true, showMobileNav: true };
	});
	return (
		<section className='layout__container'>
			{showLayoutComponents.showSideBar && <SideBar />}
			<LayoutContext.Provider value={{ setShowLayoutComponent, showLayoutComponents }}>
				<section className='layout__container-component'>
					{showLayoutComponents.showTopBar && <TopBar />}
					{props.children}
					{showLayoutComponents.showMobileNav && <MobileBottomNav />}
				</section>
			</LayoutContext.Provider>
		</section>
	);
};

export default Layout;
