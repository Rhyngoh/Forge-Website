import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllModes from './AllModes';
import Modes from './Modes';

const Mode = () => (
	<Switch>
		<Route exact path='/mode' component={AllModes}/>
		<Route path='/mode/:name' component={Modes}/>
	</Switch>
)

export default Mode;