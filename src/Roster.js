import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Piece from './Piece';

const Roster = () => {
	return(
		<Switch>
			<h2>Tile Pieces</h2>
			<Route exact path='/roster' component={FullRoster}/>
			<Route path='/roster/:number' component={Piece}/>
		</Switch>
	)
	
}

export default Roster;
