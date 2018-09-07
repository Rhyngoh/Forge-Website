import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Mode from './Mode';

const Main = () => {
	return(
		<main>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/piece' component={Roster}/>
				<Route path='/mode' component={Mode}/>
			</Switch>
		</main>
	)
	
}

export default Main;