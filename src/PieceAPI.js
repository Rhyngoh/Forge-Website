const PieceAPI = {
	pieces: {
		basicPieces: [
			{ number: 1, name: 'Basic Piece 1', link: 'Basic-Piece-1', description: 'Strike this piece and hit any surrounding tile. This is a wonderful tile to continue combinations.', image: '/images/Basic-1.png' },
			{ number: 2, name: 'Basic Piece 2', link: 'Basic-Piece-2', description: 'This piece allows the forge master to hit another tile 2 spaces away.', image: '/images/Basic-2.png' },
			{ number: 3, name: 'Basic Piece 3', link: 'Basic-Piece-3', description: 'Larger numbered pieces have limited number of tiles to strike next turn. Use them wisely!', image: '/images/Basic-3.png' },
			{ number: 4, name: 'Basic Piece 4', link: 'Basic-Piece-4', description: 'The largest numbered piece extends 4 spaces.', image: '/images/Basic-4.png' },
			{ number: 5, name: 'Knight', link: 'Knight', description: 'The knight must be followed by striking a piece two squares in a cardinal direction, and one square perpendicular to that direction.', image: '/images/Knight.png' },
			{ number: 6, name: 'Rook', link: 'Rook', description: 'The Rook must be followed by striking a piece at the edge of the board and in line with the Rook horizontally or vertically (cardinal directions)', image: '/images/Rook.png' },
			{ number: 7, name: 'Bishop', link: 'Bishop', description: 'The Bishop moves in any ordinal direction (diagonal) and must be followed by striking a piece at the edge of the board.', image: '/images/Bishop.png' },
			{ number: 8, name: 'Queen', link: 'Queen', description: 'The Queen has great flexibility and may be followed by striking a piece at the edge of the board and horizontally, vertically, or diagonally in line with the Queen.', image: '/images/Queen.png' },
			{ number: 9, name: 'Joker', link: 'Joker', description: 'The Joker is a rare piece that enables the next move taken to be anywhere on the board. The Joker is normally awarded during crafting when all of the pieces on the board has a lost a certain amount of heat.', image: '/images/Joker.png'}
		],
		reversePieces: [
			{ number: 10, name: 'Reverse Rook', link: 'Reverse-Rook', description: 'sample description', image: '/images/Reverse-Rook.png' },
			{ number: 11, name: 'Reverse Bishop', link: 'Reverse-Bishop', description: 'sample description', image: '/images/Reverse-Bishop.png' },
			{ number: 12, name: 'Reverse Queen', link: 'Reverse-Queen', description: 'sample description', image: '/images/Reverse-Queen.png' },
		],
		superPieces: [
			{ number: 13, name: 'Super Rook', link: 'Super-Rook', description: 'sample description', image: '/images/Super-Rook.png' },
			{ number: 14, name: 'Super Bishop', link: 'Super-Bishop', description: 'sample description', image: '/images/Super-Bishop.png' },
			{ number: 15, name: 'Super Queen', link: 'Super-Queen', description: 'sample description', image: '/images/Super-Queen.png' },
		]
	},
	all: function(){
		const allPiece = [...this.pieces.basicPieces, ...this.pieces.reversePieces, ...this.pieces.superPieces];
		return allPiece;
	},
	basic: function() {
		return this.pieces.basicPieces;
	},
	reverse: function() {
		return this.pieces.reversePieces;
	},
	super: function() {
		return this.pieces.superPieces;
	},
	get: function(name) {
		const isPiece = p => p.link === name;
		const allPiece = [...this.pieces.basicPieces, ...this.pieces.reversePieces, ...this.pieces.superPieces];
		return allPiece.find(isPiece)
	}
}

export default PieceAPI;