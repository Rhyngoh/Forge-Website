import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 240;
const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
		textDecoration: 'none'
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
		marginLeft: '8px',
		marginRight: '8px'
	},
	linkStyle: {
		textDecoration: 'none'
	},
	wrapper: {
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	list: {
		width: '200px',
	},
	menuItem: {
		textAlign: 'center'
	}
});

class Navbar extends React.Component {
	state = {
		right: false
	}
	toggleDrawer = (open) => () => {
		this.setState({
			right: open
		})
	}
	render(){
		const { classes } = this.props;
		const navList = (
			<div className={classes.list}>
				<Link to="/" className={classes.linkStyle}>
					<MenuItem>Home</MenuItem>
				</Link>
				<Link to="/roster" className={classes.linkStyle}>
	        		<MenuItem>Pieces</MenuItem>
	        	</Link>
	        	<Link to="/mode" className={classes.linkStyle}>
	        		<MenuItem>Modes</MenuItem>
	        	</Link>
        	</div>
    	)
		return(
			<AppBar position="static" title="The Forge" color="primary">
		        <Toolbar>
			        <Link to='/'>
			            <IconButton className={classes.menuButton} color="secondary"><HomeIcon/></IconButton>
		            </Link>
		            <Typography className={classes.flex} type="title" color="inherit">
		            	<b>The Forge</b>
		            </Typography>
		            
		            <span className={classes.wrapper}>
			            <Link to='/' className={classes.linkStyle}>
			            	<Button variant="contained" color="secondary" className={classes.button}>Home</Button>
			            </Link>
			            <Link to='/roster' className={classes.linkStyle}>
			            	<Button variant="contained" color="secondary" className={classes.button}>Pieces</Button>
			            </Link>
			            <Link to='/mode' className={classes.linkStyle}>
			            	<Button variant="contained" color="secondary" className={classes.button}>Modes</Button>
			            </Link>
		            </span>
		            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
		            	<MenuIcon/>
		            </IconButton>
		            <Drawer anchor="right" id="navMenu" open={this.state.right} onClose={this.toggleDrawer(false)}>
		            	<div tabIndex={0} role="button" onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
		            		{navList}
		            	</div>   	
		            </Drawer>
		        </Toolbar>
	      	</AppBar>
		)
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);