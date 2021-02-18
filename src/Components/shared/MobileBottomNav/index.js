import React from 'react';

import NavItem from '../NavItem';
import HomeLogo from '../../../assets/images/ic_home_32_nav.png';
import VideoLogo from '../../../assets/images/ic_video_32.png';
import QuizLogo from '../../../assets/images/ic_quiz_32.png';
import StudyPlanLogo from '../../../assets/images/ic_studyplan_32.png';
import CommunityLogo from '../../../assets/images/ic_community_32.png';
import HelpIcon from '../../../assets/images/ic_help_32.png';

import './mobile-bottom-nav.css';

const MobileBottomNav = () => {
	return (
		<menu className='mobile__bottom__nav'>
			<nav className='mobile__bottom__nav-links'>
				<NavItem to={'/'} icon={HomeLogo} />
				<NavItem to={'/'} icon={VideoLogo} />
				<NavItem to={'/'} icon={QuizLogo} />
				<NavItem to={'/'} icon={StudyPlanLogo} />
				<NavItem to={'/'} isActive icon={CommunityLogo} />
				<NavItem to={'/'} icon={HelpIcon} />
			</nav>
		</menu>
	);
};

export default MobileBottomNav;
