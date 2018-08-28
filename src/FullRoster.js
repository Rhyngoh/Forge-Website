import React from 'react';
import PieceAPI from './PieceAPI';
import { Link } from 'react-router-dom';
import { Grid, Divider } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import exampleNumber from './images/Example-Numbered.png';
import exampleNonNumber from './images/Example-Non-Numbered.png';

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
	pieceContainer: {
		padding: '2rem',
		'&': {
			textAlign: 'center'
		},
		'&:nth-child(odd)': {
			flexDirection: 'row-reverse'
		}
	},
	pieceInfo: {
		padding: '2rem'
	},
	exampleBoard: {
		padding: '1rem'
	}
}
class FullRoster extends React.Component {
	render(){
		const { classes } = this.props;
		return(
			<div>
				<Grid className={classes.root}>
					<h1>Piece Information</h1>
					<Divider />
					<Grid container spacing={24} className={classes.pieceInfo} alignItems='center' justify='center'>
						<Grid xs={8} item>
							<h2>Basic Pieces</h2>
							<p>
								Each piece on the board has an icon or pattern that will differentiate itself from the other types of pieces. The basic pieces consists of <b>numbered</b> pieces (1, 2, 3, 4) and <b>non-numbered</b> chess pieces.
							</p>
							<p>
								Numbered pieces require the next move to be a certain number of pieces away from the piece struck, going in all 4 cardinal directions and 4 ordinal directions.
							</p>
							<img src={exampleNumber} className={classes.exampleBoard} width='200' alt='Example Numbered Board'/>
							<img src={exampleNonNumber} className={classes.exampleBoard} width='200' alt='Example Non-Numbered Board'/>
						</Grid>
					</Grid>
					<Divider />
					{
						PieceAPI.basic().map(p => (
							<Grid container className={classes.pieceContainer} alignItems='center' justify='center' spacing={24} key={p.number}>
								<Grid xs={12} sm={4} item>
									<h3>{p.name}</h3>
									<p>{p.description}</p>
								</Grid>
								<Grid xs={12} sm={4} item>
									<img src={p.image} width='150' alt={p.name}/>
								</Grid>
							</Grid>
						))
					}
				</Grid>
			</div>
		)
	}
}

FullRoster.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullRoster);