/*
Winning Logic in crosses
crosses
 ['X',' ',' '] 
 [' ','X',' '] 
 [' ',' ','X'] 
                
 [' ',' ','X'] 
 [' ','X',' '] 
 ['X',' ',' '] 
*/

const winningPatterns = [
	[0, 4, 8],
	[2, 4, 6],
];

const isWinner = (board, player) => {
	return winningPatterns.some((pattern) =>
		pattern.every((index) => {
			return board[index] === player;
		})
	);
};

module.exports =  {isWinner};
