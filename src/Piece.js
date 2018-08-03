import React from 'react';
import PieceAPI from './PieceAPI';
import { Link } from 'react-router-dom';

const Piece = (props) => {
	const piece = PieceAPI.get(
		props.match.params.name
	)
	if(!piece){
		return <div>No piece was found</div>
	}
	return(
		<div>
			<h1>{piece.name}</h1>
			<h2>Description: {piece.description}</h2>
			<Link to='/roster'>Back</Link>
		</div>
	)
}

export default Piece;