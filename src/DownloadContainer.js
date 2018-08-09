import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import appleBadge from './images/apple-play-badge.png';
import googleBadge from './images/google-play-badge.png';

const styles = theme => ({
	badgeContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '1rem',
		flexWrap: 'wrap'
	},
	downloadBadge: {
		padding: '1rem',
		maxWidth: '200px'
	},
	downloadContainer: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center'
	}
});

class DownloadContainer extends React.Component {
	render(){
		const { classes } = this.props;
		return(
			<div className={classes.downloadContainer}>
				<h2>Download now!</h2>
				<div className={classes.badgeContainer}>
					<img className={classes.downloadBadge} src={googleBadge} alt='Google Play Download Badge'/>
					<img className={classes.downloadBadge} src={appleBadge} alt='Apple Download Badge'/>
				</div>
			</div>
		)
	}
}

DownloadContainer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DownloadContainer);