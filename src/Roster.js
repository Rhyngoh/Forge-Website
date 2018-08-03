import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Piece from './Piece';

const Roster = () => (
	<Switch>
		<Route exact path='/roster' component={FullRoster}/>
		<Route path='/roster/:name' component={Piece}/>
	</Switch>
)

export default Roster;