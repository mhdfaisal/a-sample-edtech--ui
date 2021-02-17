import React from 'react';
import { useLocation, Link, Switch, Route } from 'react-router-dom';

import Tabs from '../shared/Tabs';
import Tab from '../shared/Tabs/Tab';
import FollowedQuestions from './FollowedQuestions';
import NewQuestions from './NewQuestions';
import PopularQuestions from './PopularQuestions';

import './community-section.css';
import CommunityHeader from './CommunityHeader';

const RouterLink = <Link to='/' />;

const Community = () => {
	const locationObj = useLocation();
	return (
		<section className='community__section'>
			<CommunityHeader />
			<Tabs value={locationObj?.pathname}>
				<Tab label='POPULAR' component={RouterLink} to='/' />
				<Tab label='NEW' component={RouterLink} to='/new' />
				<Tab label='FOLLOWED' component={RouterLink} to='/followed' />
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
			</Switch>
		</section>
	);
};

Community.displayName = 'CommunitySection';
export default Community;
