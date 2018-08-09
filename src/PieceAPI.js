const PieceAPI = {
	pieces: [
		{ number: 1, name: 'Basic Piece 1', link: 'Basic-Piece-1', description: 'sample description1' },
		{ number: 2, name: 'Basic Piece 2', link: 'Basic-Piece-2', description: 'sample description2' },
		{ number: 3, name: 'Basic Piece 3', link: 'Basic-Piece-3', description: 'sample description3' },
		{ number: 4, name: 'Basic Piece 4', link: 'Basic-Piece-4', description: 'sample description4' },
		{ number: 5, name: 'Knight', link: 'Knight', description: 'sample description' },
		{ number: 6, name: 'Rook', link: 'Rook', description: 'sample description' },
		{ number: 7, name: 'Bishop', link: 'Bishop', description: 'sample description' },
		{ number: 8, name: 'Queen', link: 'Queen', description: 'sample description' },
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