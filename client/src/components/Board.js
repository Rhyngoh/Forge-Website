import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllBoards from './AllBoards';
import SubmitForm from './SubmitForm';
import BoardList from './BoardList';

const Boards = () => (
	<Switch>
		<Route exact path='/boards' component={AllBoards}/>
		<Route path='/boards/:id' component={BoardList}/>
		<Route exact path='/boards/submit' component={SubmitForm}/>
	</Switch>
)

export default Boards;