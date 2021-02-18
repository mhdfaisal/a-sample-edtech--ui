import React from 'react';

import NavItem from '../NavItem';
import Logo from '../../../assets/images/luca_logo_color.png';
import HomeLogo from '../../../assets/images/ic_home_32_nav.png';
import VideoLogo from '../../../assets/images/ic_video_32.png';
import QuizLogo from '../../../assets/images/ic_quiz_32.png';
import StudyPlanLogo from '../../../assets/images/ic_studyplan_32.png';
import CommunityLogo from '../../../assets/images/ic_community_32.png';
import HelpIcon from '../../../assets/images/ic_help_32.png';

import './sidebar-styles.css';

const SideBar = () => {
	return (
		<>
			<aside className='sidebar__container'>
				<div className='sidebar__logo'>
					<img src={Logo} alt='lucas-logo' />
				</div>
				<nav className='sidebar__links'>
					<NavItem to={'/'} text='Inicio' icon={HomeLogo} />
					<NavItem to={'/'} text='Mis cursos' icon={VideoLogo} />
					<NavItem to={'/'} text='Quizzes' icon={QuizLogo} />
					<NavItem to={'/'} text='Mi plan de estudios' icon={StudyPlanLogo} />
					<NavItem to={'/'} isActive text='Comunidad' icon={CommunityLogo} />
					<NavItem to={'/'} text='Centro de ayuda' icon={HelpIcon} />
				</nav>
			</aside>
			<aside className='sidebar__spacer'></aside>
		</>
	);
};

export default SideBar;
