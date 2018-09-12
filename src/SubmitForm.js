import React from 'react';
import { Grid, Divider } from '@material-ui/core/';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';

const SubmitForm = props => (
	<form onSubmit={props.submitCustom}>
		<input
			type="text"
			name="author"
			placeholder="Your name"
			value={props.author}
			onChange={props.handleChangeText}
		/>
		<input
			type="text"
			name="title"
			placeholder="Input Title"
			value={props.title}
			onChange={props.handleChangeText}
		/>
		<input
			type="text"
			name="image"
			placeholder="Input Image"
			value={props.image}
			onChange={props.handleChangeText}
		/>
		<button type="submit">Submit</button>
	</form>
);

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

export default SubmitForm;