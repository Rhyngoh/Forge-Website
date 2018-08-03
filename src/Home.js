import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import forgeIcon from './images/forgeAnvil.jpg';
import appleBadge from './images/apple-play-badge.png';
import googleBadge from './images/google-play-badge.png';
// import ImageSlider from './ImageSlider';
import Carousel from './Carousel';
require('./css/carousel.min.css');

const styles = theme => ({
	root: {
		flexGrow: 1,
		paddingTop: 40
	},
	forgeImage: {
		width: 150,
		height: 150,
		transition: '0.3s',

		'&:hover': {
			opacity: 0.5
		}
	},
	carouselContainer: {
		width: 400
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
			<Grid container className={classes.root} direction='column' alignItems='center' justify='flex-start' spacing={16}>
				<Grid item xs={12}>
					<p>Name: {this.state.username}</p>
				</Grid>
				<Grid item xs={12}>
	            	<input type="text" value={this.state.username} onChange={this.handleChange}/>
	            </Grid>
	            <Grid item xs={12}>
					<h2>Welcome to </h2>
					<h1><u>The Forge</u></h1>
				</Grid>
				<Grid item xs={12}>
					<img src={forgeIcon} className={classes.forgeImage}/>
				</Grid>
				<Grid item xs={12}>
					<h2>Forge Your Path</h2>
				</Grid>
				<Grid item xs={12}>
					<img src={googleBadge} width="200"/>
				</Grid>
				<Grid item xs={12}>
					<img src={appleBadge} width="200"/>
				</Grid>
				<Grid item xs={12}>
					<div className={classes.carouselContainer}>
						<Carousel />
					</div>
				</Grid>
			</Grid>
			
			</div>
		)
	}
}

export default withStyles(styles)(Home);
// <div className={classes.imageSliderContainer}>
// 				<ImageSlider />
// 			</div>