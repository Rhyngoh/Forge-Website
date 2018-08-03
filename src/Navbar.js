import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Tabs, Tab, Drawer} from '@material-ui/core';

const drawerWidth = 240;
const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
	flex: {
		flex: 1
	},
	root: {
		flexGrow: 1,
		height: 430,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0
	},
	toolbar: theme.mixins.toolbar,
	menuButton: {
		marginLeft: -12,
		marginRight: 5
	}
});

class Navbar extends React.Component {
	render(){
		const { classes } = this.props;
		return(
		
			<AppBar position="static" title="The Forge" color="primary">
		        <Toolbar>
			        <Link to='/'>
			            <IconButton className={classes.menuButton} color="secondary"><HomeIcon/></IconButton>
		            </Link>
		            <Typography className={classes.flex} type="title" color="inherit">
		            	<b>The Forge</b>
		            </Typography>
		            
		            <Link to='/'>
		            	<Button variant="contained" color="secondary" className={classes.button}>Home</Button>
		            </Link>
		            <Link to='/roster'>
		            	<Button variant="contained" color="secondary" className={classes.button}>Pieces</Button>
		            </Link>
		        </Toolbar>
	      </AppBar>
		)
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);