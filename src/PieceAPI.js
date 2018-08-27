const PieceAPI = {
	pieces: [
		{ number: 1, name: 'Basic Piece 1', link: 'Basic-Piece-1', description: 'sample description1', image: '/images/Basic-1.png' },
		{ number: 2, name: 'Basic Piece 2', link: 'Basic-Piece-2', description: 'sample description2', image: '/images/Basic-2.png' },
		{ number: 3, name: 'Basic Piece 3', link: 'Basic-Piece-3', description: 'sample description3', image: '/images/Basic-3.png' },
		{ number: 4, name: 'Basic Piece 4', link: 'Basic-Piece-4', description: 'sample description4', image: '/images/Basic-4.png' },
		{ number: 5, name: 'Knight', link: 'Knight', description: 'sample description', image: '/images/Knight.png' },
		{ number: 6, name: 'Rook', link: 'Rook', description: 'sample description', image: '/images/Rook.png' },
		{ number: 7, name: 'Bishop', link: 'Bishop', description: 'sample description', image: '/images/Bishop.png' },
		{ number: 8, name: 'Queen', link: 'Queen', description: 'sample description', image: '/images/Queen.png' },
	],
	reversePieces: [
		{ number: 9, name: 'Reverse Rook', link: 'Reverse-Rook', description: 'sample description', image: '/images/Reverse-Rook.png' },
		{ number: 10, name: 'Reverse Bishop', link: 'Reverse-Bishop', description: 'sample description', image: '/images/Reverse-Bishop.png' },
		{ number: 11, name: 'Reverse Queen', link: 'Reverse-Queen', description: 'sample description', image: '/images/Reverse-Queen.png' },
	],
	superPieces: [
		{ number: 12, name: 'Super Rook', link: 'Super-Rook', description: 'sample description', image: '/images/Super-Rook.png' },
		{ number: 13, name: 'Super Bishop', link: 'Super-Bishop', description: 'sample description', image: '/images/Super-Bishop.png' },
		{ number: 14, name: 'Super Queen', link: 'Super-Queen', description: 'sample description', image: '/images/Super-Queen.png' },
	],
	all: function(){
		return this.pieces;
	},
	get: function(name) {
		const isPiece = p => p.link === name
		return this.pieces.find(isPiece)
	}
}

export default PieceAPI;