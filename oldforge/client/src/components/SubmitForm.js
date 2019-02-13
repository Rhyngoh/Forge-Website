import React from 'react';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core/';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import auth from './../utils/Auth';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
  	marginLeft: theme.spacing.unit,
  	marginRight: theme.spacing.unit,
  },
  textInput: {
  	color: 'white'
  },
  textLabel: {
  	color: 'white'
  },
  button: {
  	height: 0,
  	alignSelf: 'center'
  },
  linkStyle: {
  	textDecoration: 'underline',
  	cursor: 'pointer',
  	fontWeight: 'bold'
  }
});

class SubmitForm extends React.Component {
	render(){
		const { classes } = this.props;
		const authed = auth.isAuthenticated();
		const regex64 = new RegExp('^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$');
		const isEnabled = regex64.test(this.props.image.split(',')[1]);
		return(
			<div>
			{
				authed && 
				<form onSubmit={this.props.submitCustom} className={classes.container} autoComplete="off">
					<FormControl className={classes.textField} id="form-title">
				        <InputLabel
				          htmlFor="inputTitle"
				          FormLabelClasses={{
				            root: classes.textInput,
				            focused: classes.textInput,
				          }}
				        >
				          Title
				        </InputLabel>
				        <Input
				          id="inputTitle"
				          classes={{
				            underline: classes.textInput,
				          }}
				          value={this.props.title}
				          onChange={this.props.handleChangeText}
				          name="title"
				        />
				    </FormControl>
				    <FormControl className={classes.textField} id="form-image">
				        <InputLabel
				          htmlFor="inputImage"
				          FormLabelClasses={{
				            root: classes.textInput,
				            focused: classes.textInput,
				          }}
				        >
				          Image URL
				        </InputLabel>
				        <Input
				          id="inputImage"
				          classes={{
				            underline: classes.textInput,
				          }}
				          value={this.props.image}
				          onChange={this.props.handleChangeText}
				          name="image"
				        />
				    </FormControl>
					<Button type="submit" disabled={!isEnabled} variant="contained" className={classes.button}>
						Submit
					</Button>
				</form>
			}
			{
				!authed && 
				<p style={{textAlign: 'center'}}><span className={classes.linkStyle} onClick={auth.signIn}>Sign In</span> to submit your own custom boards!</p>
			}
			</div>
		)
	}
	
}

SubmitForm.propTypes = {
	submitCustom: PropTypes.func.isRequired,
	handleChangeText: PropTypes.func.isRequired,
	image: PropTypes.string,
	title: PropTypes.string
};
SubmitForm.defaultProps = {
	image: '',
	title: ''
}

export default withStyles(styles)(SubmitForm);