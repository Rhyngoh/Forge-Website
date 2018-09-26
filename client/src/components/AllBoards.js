import React from 'react';
import { Grid, Divider, Snackbar } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import BoardList from './BoardList';
import SubmitForm from './SubmitForm';
import auth from './../utils/Auth';
import Paginate from './Paginate';
import SnackbarContentWrapper from './SnackbarContentWrapper';

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
	},
	paginationWrapper: {
		textAlign: 'center'
	}
}
class AllBoards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			error: null,
			title: '',
			image: '',
			pageOfItems: [],
			snackbarOpen: false,
			snackbarMsg: ''
		}
	}

	componentDidMount() {
		this.getList();
	}

	getList = () => {
		fetch('/api/boards')
		.then((response) => {
			console.log(response);
			return response.json();
		}).then((res) => {
			console.log(res);
			this.setState({ data: res });
		});
	}

	onChangeText = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}
	onSubmit = (e) => {
		e.preventDefault();
		const author = auth.getProfile().name;
		const {title, image} = e.target;
		if(!author || !title.value || !image.value) return;
		let imgpaste = image.value.split(',')[0];
		console.log(imgpaste);
		const img64string = 'data:image/gif;base64,' + image.value.split(',')[1];
		const data = {
			"author": author,
			"title": title.value,
			"paste": imgpaste,
			"image": img64string
		};
		console.log(data);
		console.log(JSON.stringify(data));
		fetch('/api/boards/post', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data),
		}).then(res => res.json()).then((res) => {
			if(!res.success){
				console.log(res.error);
				this.snackHandleOpen(res.error);
			}else this.setState({ author: '', title: '', image: '', error: null });
		}).then(()=>{
			this.getList();
		});
	}
	onChangePage = (pageOfItems) => {
		this.setState({ pageOfItems: pageOfItems });
	}
	snackHandleOpen = (msg) => {
		this.setState({ snackbarOpen: true, snackbarMsg: msg });
	}
	snackHandleClose = (event, reason) => {
		if(reason === 'clickaway') {
			return;
		}
		this.setState({ snackbarOpen: false });
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
								<SubmitForm author={this.state.author} title={this.state.title} image={this.state.image} handleChangeText={this.onChangeText} submitCustom={this.onSubmit}/>
							</div>
						</Grid>
						<Grid xs={10} item>
							<BoardList data={this.state.pageOfItems} />
						</Grid>
						<Grid xs={10} item className={classes.paginationWrapper}>
							<Paginate items={this.state.data} onChangePage={this.onChangePage}/>
						</Grid>
						{this.state.error && <p>{this.state.error}</p>}
					</Grid>
					<Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} open={this.state.snackbarOpen} autoHideDuration={3000} onClose={this.snackHandleClose}>
						<SnackbarContentWrapper message={this.state.snackbarMsg}/>
					</Snackbar>
				</Grid>
			</div>
		);
	}
}

AllBoards.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllBoards);