import React from 'react';
import ModeAPI from './ModeAPI';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const Mode = (props) => {
	const mode = ModeAPI.get(
		props.match.params.name
	)
	if(!mode){
		return <div>No Mode was found</div>
	}
	return(
		<div>
			<Grid id="modeContainer" container justify='center' spacing={24}>
				<Grid sm={10} item>
				<h1>{mode.name}</h1>
				</Grid>
				<Grid sm={10} item>
				<p dangerouslySetInnerHTML={{ __html: mode.description }}></p>
				<Link to='/mode'>Back</Link>
				</Grid>
			</Grid>
		</div>
	)
}
export default Mode;