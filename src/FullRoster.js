import React from 'react';
import PieceAPI from './PieceAPI';
import { Link } from 'react-router-dom';
import { Grid, Divider } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import jss from 'jss';
import preset from 'jss-preset-default';
import forgeIcon from './images/forgeAnvil.jpg';
import PropTypes from 'prop-types';

jss.setup(preset());

const styles = {
	root: {
		flexGrow: 1,
		width: '100%',
		margin: 0,
		'& h2': {
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
	}
}
class FullRoster extends React.Component {
	render(){
		const { classes } = this.props;
		return(
			<div>
				<Grid className={classes.root}>
					<h2>Piece Information</h2>
					<Divider />
					{
						PieceAPI.all().map(p => (
							<Grid container className={classes.pieceContainer} alignItems='center' justify='center' spacing={24} key={p.number}>
								<Grid xs={12} sm={4} item>
									<h3>{p.name}</h3>
									<p>{p.description}</p>
								</Grid>
								<Grid xs={12} sm={4} item>
									<img src={forgeIcon} width='200' alt={p.name}/>
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