import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
	pagination: {
		display: 'inline-block',
		textAlign: 'center',
		'& a': {
			color: 'black',
			float: 'left',
			padding: '8px 16px',
			textDecoration: 'none'
		},
		'& a.active': {
			backgroundColor: '#4CAF50',
			color: 'white'
		},
		'& a:hover:not(.active)': {
			backgroundColor: '#ddd'
		}
	}
}

class Paginate extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pager: {} };
	}
	componentWillMount() {
		if(this.props.items && this.props.items.length) {
			this.setPage(this.props.initialPage);
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if(this.props.items !== prevProps.items){
			this.setPage(this.props.initialPage);
		}
	}
	setPage(page){
		let { items, pageSize } = this.props;
		let pager = this.state.pager;

		if(page < 1 || page > pager.totalPages) {
			return;
		}
		pager = this.getPager(items.length, page, pageSize);
		let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

		this.setState({ pager: pager });

		this.props.onChangePage(pageOfItems);
	}

	getPager(totalItems, currentPage, pageSize){
		currentPage = currentPage || 1;
		pageSize = pageSize || 12;
		let totalPages = Math.ceil(totalItems / pageSize);
		let startPage, endPage;
		if(totalPages <= 10) {
			startPage = 1;
			endPage = totalPages;
		}else {
			if(currentPage <= 6) {
				startPage = 1;
				endPage = 10;
			}else if(currentPage + 4 >= totalPages) {
				startPage = totalPages - 9;
				endPage = totalPages;
			}else {
				startPage = currentPage - 5;
				endPage = currentPage + 4;
			}
		}

		let startIndex = (currentPage - 1) * pageSize;
		let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

		let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

		return {
			totalItems: totalItems,
			currentPage: currentPage,
			pageSize: pageSize,
			totalPages: totalPages,
			startPage: startPage,
			endPage: endPage,
			startIndex: startIndex,
			endIndex: endIndex,
			pages: pages
		};
	}

	render() {
		const { classes } = this.props;
		let pager = this.state.pager;

		if(!pager.pages || pager.pages.length <= 1) {
			return null;
		}
		return(
			<ul className={classes.pagination}>
				<a className={pager.currentPage === 1 ? 'disabled' : ''} onClick={()=>this.setPage(1)}>First</a>
				<a className={pager.currentPage === 1 ? 'disabled' : ''} onClick={()=>this.setPage(pager.currentPage - 1)}>Previous</a>
				{pager.pages.map((page, index) => 
					<a key={index} className={pager.currentPage === page ? 'active' : ''} onClick={()=>this.setPage(page)}>{page}</a>
				)}
                <a className={pager.currentPage === pager.totalPages ? 'disabled' : ''} onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                <a className={pager.currentPage === pager.totalPages ? 'disabled' : ''} onClick={() => this.setPage(pager.totalPages)}>Last</a>
			</ul>
		)
	}
}

Paginate.propTypes = {
	items: PropTypes.array.isRequired,
	onChangePage: PropTypes.func.isRequired,
	initialPage: PropTypes.number,
	pageSize: PropTypes.number
}

Paginate.defaultProps = {
	initialPage: 1,
	pageSize: 12
}

export default withStyles(styles)(Paginate);