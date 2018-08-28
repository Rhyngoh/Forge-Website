// import React from 'react';

// const Schedule = () => {
// 	return(
// 		<p>Schedule</p>
// 	)
// }

// export default Schedule;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllModes from './AllModes';
import Modes from './Modes';

const Roster = () => (
	<Switch>
		<Route exact path='/mode' component={AllModes}/>
		<Route path='/mode/:name' component={Modes}/>
	</Switch>
)

export default Roster;