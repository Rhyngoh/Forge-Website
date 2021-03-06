import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Divider, Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';

jss.setup(preset());

const styles = {
	root: {
		flexGrow: 1,
		width: '100%',
		margin: 0,
		'& h1': {
			textAlign: 'center'
		}
	},
	modeInfo: {
		padding: '2rem',
		'& p': {
			textAlign: 'center'
		},
		'& a': {
			display: 'flex',
			justify: 'space-around'
		}
	},
	modeButtons: {
		display: 'flex',
		justify: 'space-around',
		color: '#a3a3c2',
		borderColor: '#a3a3c2'
	},
	linkStyle: {
		textDecoration: 'none',
		margin: '5px'
	}
}

class AllModes extends React.Component {
	render(){
		const { classes } = this.props;
		return(
			<div>
				<Grid className={classes.root}>
					<h1>Mode Information</h1>
					<Divider />
					<Grid container spacing={24} className={classes.modeInfo} alignItems='center' justify='center'>
						<Grid xs={8} item>
							<p>The Forge has multiple game modes to test your limits. Choose a game mode to learn more.</p>
						</Grid>
						<Grid xs={8} item>
							<Grid container spacing={24} justify='space-around'>
								<Link to="/mode/Crafting" className={classes.linkStyle}><Button variant="outlined" className={classes.modeButtons}>Crafting</Button></Link> 
								<Link to="/mode/Explore" className={classes.linkStyle}><Button variant="outlined" className={classes.modeButtons}>Explore</Button></Link> 
								<Link to="/mode/Challenge" className={classes.linkStyle}><Button variant="outlined" className={classes.modeButtons}>Challenge</Button></Link> 
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		)
	}
}

AllModes.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllModes);