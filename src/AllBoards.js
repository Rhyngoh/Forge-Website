import React from 'react';
import { Grid, Divider } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import BoardList from './BoardList';
import SubmitForm from './SubmitForm';

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
	},
	pieceNav: {
		color: 'black'
	}
}
class AllBoards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			error: null,
			author: '',
			title: '',
			image: ''
		}
	}

	componentDidMount() {
		this.getList();
	}

	getList = () => {
		fetch('/boards')
		.then((response) => {
			console.log(response);
			return response.json();
		}).then((res) => {
			console.log(res);
			this.setState({ data: res });
		});
	}

	onChangeText = (e) => {
		const newState = { ...this.state };
		newState[e.target.name] = e.target.value;
		this.setState(newState);
	}

	submitCustom = (e) => {
		e.preventDefault();
		const { author, title, image} = this.state;
		if(!author || !title || !image) return;
		fetch('/boards', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({author,title,image}),
		}).then(res => res.json()).then((res) => {
			if(!res.success) this.setState({ error: res.error.message || res.error });
			else this.setState({ author: '', title: '', image: '', error: null });
		}).then(()=>{
			this.getList();
		});
	}

	render(){
		const { classes } = this.props;

		return(
			<div>
				<Grid className={classes.root}>
					<h1>Custom Boards</h1>
					<Divider />
					<Grid container spacing={24} className={classes.pieceInfo} alignItems='center' justify='center'>
						<Grid xs={8} item>
							<div className="form">
								<SubmitForm author={this.state.author} title={this.state.title} image={this.state.image} handleChangeText={this.onChangeText} submitCustom={this.submitCustom}/>
							</div>
						</Grid>
						<Grid xs={10} item>
							<BoardList data={this.state.data} />
						</Grid>
						{this.state.error && <p>{this.state.error}</p>}
					</Grid>
				</Grid>
			</div>
		);
	}
}

AllBoards.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllBoards);