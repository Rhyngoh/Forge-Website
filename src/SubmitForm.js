import React from 'react';
import { TextField, Button } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
  	marginLeft: theme.spacing.unit,
  	marginRight: theme.spacing.unit,
  },
  button: {
  	height: 0,
  	alignSelf: 'center'
  }
});

function SubmitForm(props) {
	const { classes } = props;
	return(
		<form onSubmit={props.submitCustom} className={classes.container} autoComplete="off">
			<TextField
				id="form-author"
				label="Name"
				className={classes.textField}
				value={props.author}
				onChange={props.handleChangeText}
				margin="normal"
				name="author"
			/>
			<TextField
				id="form-title"
				label="Title"
				className={classes.textField}
				value={props.title}
				onChange={props.handleChangeText}
				margin="normal"
				name="title"
			/>
			<TextField
				id="form-image"
				label="Image URL"
				className={classes.textField}
				value={props.image}
				onChange={props.handleChangeText}
				margin="normal"
				name="image"
			/>
			<Button variant="contained" className={classes.button}>
				Submit
			</Button>
		</form>
	)
	
}

SubmitForm.propTypes = {
	submitCustom: PropTypes.func.isRequired,
	handleChangeText: PropTypes.func.isRequired,
	author: PropTypes.string,
	title: PropTypes.string
};
SubmitForm.defaultProps = {
	author: '',
	title: ''
}

export default withStyles(styles)(SubmitForm);