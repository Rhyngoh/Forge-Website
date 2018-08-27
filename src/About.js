import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = theme => ({
	aboutContainer: {
		display: 'flex',
		paddingLeft: '3rem',
		paddingRight: '3rem',
		'& h3': {
			textAlign: 'center'
		}
	},
	button: {
		margin: theme.spacing.unit
	},
	aboutSection: {
		paddingLeft: '3rem',
		paddingRight: '3rem'
	}
});

const ModeDescription = {
	mode: [
	{ 
		title: 'Crafting', 
		description: 'Forge weapons of steel in crafting mode! The goal is to hit pieces while generating a good score to eventually craft legendary weapons.'
	},
	{ 
		title: 'Explore', 
		description: 'Fight hordes of monsters and bosses with the weapons you\'ve crafted in Crafting mode.'
	},
	{ 
		title: 'Challenge', 
		description: 'Challenge yourself against pre-defined stages and try to achieve three stars on each stage!<br><br> Earn stars by accomplishing 3 goals: <ul><li>Hit the seal</li><li>Score a certain number of points</li><li>Completely clear the board</li></ul> Every challenge puzzle has a preset number of pieces, a specific starting point, and a set seal location.'
	}
	],
	get: function(title) {
		const isMode = m => m.title === title
		return this.mode.find(isMode);
	}
}

class About extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			title: 'Select a mode to learn more!',
			description: ''
		}
	}
	handleClick(params, e) {
		let shownMode = ModeDescription.get(params);
		this.setState({
			title: shownMode.title,
			description: shownMode.description
		})
	}
	render(){
		const { classes } = this.props;
		return(
			<Grid container className={classes.aboutContainer} spacing={16} justify='space-around'>
				<Grid xs={12} md={5} item className={classes.aboutSection}>
					<h2>What is the Forge?</h2>
					<p>
						The Forge is a strategy and puzzle game that incorporates chess-like movements that is playable across all mobile devices. This blend of new gameplay mechanics puts a twist on the classic board game.
					</p>
					<p>
						There are three <b>modes</b> to play: 
					</p>
					<Button variant="outlined" className={classes.button} onClick={(e) => this.handleClick("Crafting", e)}>Crafting</Button>
					<Button variant="outlined" className={classes.button} onClick={(e) => this.handleClick("Explore", e)}>Explore</Button>
					<Button variant="outlined" className={classes.button} onClick={(e) => this.handleClick("Challenge", e)}>Challenge</Button>
				</Grid>
				<Grid xs={12} md={5} item>
					<h3>{this.state.title}</h3>
					<p dangerouslySetInnerHTML={{ __html: this.state.description }}></p>
				</Grid>
			</Grid>
		)
	}
}

About.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);