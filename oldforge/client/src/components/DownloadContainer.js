import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import appleBadge from './../images/apple-play-badge.png';
import googleBadge from './../images/google-play-badge.png';

const styles = theme => ({
	badgeContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '1rem',
		flexWrap: 'wrap'
	},
	appleBadge: {
		padding: '1rem',
		width: '200px'
	},
	googleBadge: {
		padding: '1rem',
		width: '232px'
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
				<p>Available on Google Play and the App Store</p>
				<div className={classes.badgeContainer}>
					<a href="https://play.google.com/store/apps/details?id=com.LozengeLabs.TheForge2" target="_blank" rel="noopener noreferrer">
						<img className={classes.googleBadge} src={googleBadge} alt='Google Play Download Badge'/>
					</a>
					<a href="https://itunes.apple.com/app/id1451861863" target="_blank" rel="noopener noreferrer">
						<img className={classes.appleBadge} src={appleBadge} alt='Apple Download Badge'/>
					</a>
				</div>
			</div>
		)
	}
}

DownloadContainer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DownloadContainer);
//<img className={classes.downloadBadge} src={appleBadge} alt='Apple Download Badge'/>