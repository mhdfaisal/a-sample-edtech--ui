import React from 'react';

import Explorer from '../Explorer';
import SearchIcon from '../../../assets/images/Union.png';
import FireIcon from '../../../assets/images/local_fire_department-24px 1.png';
import PoliceIcon from '../../../assets/images/local_police-24px 1.png';
import FloristIcon from '../../../assets/images/local_florist-24px 1.png';
import NotificationIcon from '../../../assets/images/ic_notification_32.png';
import User from '../../../assets/images/user.png';

import './top-bar-styles.css';

const TopBar = () => {
	return (
		<header className='top__bar'>
			<div className='top__bar__explorer'>
				<div className='top__bar__explorer-btn'>
					<Explorer />
				</div>
				<div className='top__bar__search-icon'>
					<img src={SearchIcon} alt='search-icon' />
				</div>
			</div>
			<div className='top__bar__trending'>
				<div className='top__bar__fire'>
					<img src={FireIcon} alt='fire-icon' className='fire-icon' />
					<span className='top__bar__trending-count'>0</span>
				</div>
				<div className='top__bar__police'>
					<img src={PoliceIcon} alt='police-icon' className='police-icon' />
					<span className='top__bar__trending-count'>0</span>
				</div>
				<div className='top__bar__florist'>
					<img src={FloristIcon} alt='florist-icon' className='florist-icon' />
					<span className='top__bar__trending-count'>0</span>
				</div>
			</div>
			<div className='top__bar__user-area'>
				<img
					src={NotificationIcon}
					alt='notification-icon'
					className='notification__icon'
				/>
				<img src={User} alt='user-icon' className='user__icon' />
			</div>
		</header>
	);
};

export default TopBar;
