import React from 'react';
// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// import StyledSlide from './Slide';
// import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';
import screen1 from './images/GameScreens/screen1.jpg';
import screen2 from './images/GameScreens/screen2.jpg';
import screen3 from './images/GameScreens/screen3.jpg';
// import Slider from 'react-slick';
import Carousel from 'nuka-carousel';
import './css/styles.css';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	slides: {
		display: 'flex',
		justifyContent: 'center',
	}
})
class ImageSlider extends React.Component{
	render(){
		const { classes } = this.props;
		var settings = {
			dots: true,
			infinite: true,
			speed: 500
		};
		return(
			<div styles={classes.slides}>
				<Carousel slidesToShow={3} width="50%">
					<img src={screen1}/>
					<img src={screen2}/>
					<img src={screen3}/>
					<img src={screen1}/>
					<img src={screen2}/>
					<img src={screen3}/>
				</Carousel>
			</div>
		)
	}
}

export default withStyles(styles)(ImageSlider);