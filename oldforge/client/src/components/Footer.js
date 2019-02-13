import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	footer: {
		backgroundColor: '#333745',
		color: 'white',
		textAlign: 'center',
		padding: '15px',
		marginTop: '3rem',
	}
});

class Footer extends React.Component {
	render(){
		const { classes } = this.props;
		return(
			<footer className={classes.footer}>
				Website made with React and Material-UI | Copyright 2018
			</footer>
		)
	}
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);