import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, SnackbarContent } from '@material-ui/core/';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	error: {
		backgroundColor: '#d32f2f'
	},
	icon: {
		fontSize: 20,
		opacity: 0.9,
		marginRight: theme.spacing.unit
	},
	message: {
		display: 'flex',
		alignItems: 'center',
	}
});

function SnackbarContentWrapper(props) {
	const { classes, message, onClose, ...other } = props;
	const Icon = ErrorIcon;
	return (
		<SnackbarContent
		className={classes.error}
		aria-describedby="client-snackbar"
		message={
			<span id="client-snackbar" className={classes.message}>
				<ErrorIcon className={classes.icon}/>
				{props.message}
			</span>
		}
		action={[
			<IconButton key="close"
			aria-label="Close"
			color="inherit"
			className={classes.close}
			onClick={onClose}
			>
				<CloseIcon className={classes.icon}/>
			</IconButton>
		]}
		
		/>
	)
}

SnackbarContentWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
	message: PropTypes.node,
	onClose: PropTypes.func
};

export default withStyles(styles)(SnackbarContentWrapper);