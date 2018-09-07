import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Piece from './Piece';

const Roster = () => (
	<Switch>
		<Route exact path='/piece' component={FullRoster}/>
		<Route path='/piece/:name' component={Piece}/>
	</Switch>
)

export default Roster;