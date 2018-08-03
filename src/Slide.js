import React from 'react';
import screen1 from './images/GameScreens/screen1.jpg';
import { Slide } from 'material-auto-rotating-carousel';
import { grey } from '@material-ui/core/colors';
const { withStyles } = require('@material-ui/core/styles');

const styles = {
	root: {
		backgroundColor: grey[400],
		height: 300,
		width: 200
	},
	media: {
		backgroundColor: grey[400]
	}
}

const StyledSlide = withStyles(styles)(Slide);

<StyledSlide media={<img src={screen1} />} />

export default StyledSlide;