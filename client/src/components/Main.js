import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Mode from './Mode';
import Board from './Board';
import Callback from './Callback';
import history from './../utils/history';


const Main = () => {
	return(
		<main>
			<Switch history={history} component={Home}>
				<Route exact path='/' component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/piece' component={Roster}/>
				<Route path='/mode' component={Mode}/>
				<Route path='/boards' component={Board}/>
				<Route exact path='/callback' component={Callback}/>
			</Switch>
		</main>
	)
	
}

export default Main;