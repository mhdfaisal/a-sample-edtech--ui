import React from 'react';
import { useLocation, Link, Switch, Route, Redirect, useHistory } from 'react-router-dom';

import Tabs from '../shared/Tabs';
import Tab from '../shared/Tabs/Tab';
import FollowedQuestions from './FollowedQuestions';
import NewQuestions from './NewQuestions';
import PopularQuestions from './PopularQuestions';

import './community-section.css';
import CommunityHeader from './CommunityHeader';
import RoundedIconBtn from '../shared/RoundedIconBtn';
import PenImage from '../../assets/images/ic_home_32.png';

const RouterLink = <Link to='/' />;

const Community = () => {
	const locationObj = useLocation();
	const history = useHistory();
	return (
		<section className='community__section'>
			<CommunityHeader />
			<Tabs value={locationObj?.pathname}>
				<Tab label='POPULARES' component={RouterLink} to='/' />
				<Tab label='NEUVOS' component={RouterLink} to='/new' />
				<Tab label='SEGUDOS' component={RouterLink} to='/followed' />
			</Tabs>
			<Switch>
				<Route path='/' exact>
					<PopularQuestions />
				</Route>
				<Route path='/new' exact>
					<NewQuestions />
				</Route>
				<Route path='/followed' exact>
					<FollowedQuestions />
				</Route>
				<Route path='*'>
					<Redirect to='/notfound' />
				</Route>
			</Switch>
			<div className='community__section__float-btn'>
				<RoundedIconBtn onClick={() => history.push('/ask')}>
					<img src={PenImage} alt='add-question' />
				</RoundedIconBtn>
			</div>
		</section>
	);
};

Community.displayName = 'CommunitySection';
export default Community;
