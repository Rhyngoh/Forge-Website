import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core/';
import forgeIcon from './images/forgeAnvil.jpg';

import DownloadContainer from './DownloadContainer';
import Carousel from './Carousel';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
	root: {
		flexGrow: 1,
		paddingTop: '5rem',
		width: '100%',
		margin: 0
	},
	forgeImage: {
		width: '60%',
		maxWidth: '500px',
		transition: '0.3s',
		'&:hover': {
			opacity: 0.5
		}
	},
	heroImage: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heroBanner: {
		width: '100%',
		textAlign: 'center'
	},
	carouselContainer: {
		maxWidth: '300px',
		padding: '3rem 1rem',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	divider: {
		marginTop: '3rem',
		marginBottom: '3rem'
	}
});

class Home extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			username: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.setState({
			username: e.target.value
		})
	}
	render(){
		const { classes } = this.props;
		return(
			<div>
			<Grid container className={classes.root} direction='column' alignItems='center' justify='flex-start' spacing={24}>
	            <Grid sm={12} item>
	            	<div className={classes.heroImage}>
	            		<img src={forgeIcon} className={classes.forgeImage}/>
	            	</div>
				</Grid>
				<Grid sm={12} item>
					<div className={classes.heroBanner}>
						<ScrollAnimation animateIn='fadeIn' animateOnce>
							<h1>Welcome to The Forge</h1>
						</ScrollAnimation>
						<ScrollAnimation animateIn='fadeIn' animateOnce>
							<h2>Forge Your Path</h2>
						</ScrollAnimation>
					</div>
				</Grid>
			</Grid>
					<Divider className={classes.divider}/>
				<Grid sm={12} item>
					<div className={classes.carouselContainer}>
						<Carousel/>
					</div>
				</Grid>
				<Grid sm={12} item>
					<Divider className={classes.divider}/>
				</Grid>
				<Grid sm={12} item>
					<DownloadContainer />
				</Grid>
			
			</div>
		)
	}
}

export default withStyles(styles)(Home);