import React, { Component } from 'react';

class Piece extends Component {
	constructor(props){
		super(props);
		this.state = {
			pieces: [
				'Basic Pieces',
				'Knight',
				'Rook',
				'Bishop',
				'Queen'
			]
		}
	}
	render() {
	    return (
	        <div>
		      	<ul>
		      		{
		      			this.state.pieces.map((piece) => {
		      				return <li>{piece}</li>
		      			})
		      		}
		      	</ul>
	        </div>
	    );
	}
}

export default Piece;