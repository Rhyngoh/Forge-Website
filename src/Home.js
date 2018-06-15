import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

const styles = theme => ({
	root: {
		flexGrow: 1,
		paddingTop: 40
	},
	gridContainer: {
		height: 240
	},
	forgeImage: {
		width: 150,
		height: 150,

		'&:hover': {
			border: '1px solid blue'
		}
	}
});

class Home extends React.Component {
	render(){
		const { classes } = this.props;
		return(
			<Grid container className={classes.root}>
				<Grid item xs={12}>
					<Grid container spacing={16} className={classes.gridContainer} alignItems='center' direction='column' justify='flex-start'>
						<h2>Welcome to </h2>
						<h1><u>The Forge</u></h1>
						<img src={require('./images/forgeAnvil.jpg')} className={classes.forgeImage}/>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(styles)(Home);
