/**
 * @param {number} n
 * @return {string[][]}
 */
var res;

// go through all possible solutions from top row(0) to bottom row(n-1)
var solveNQueens = function(n) {
    res = [];
    // initiate the chess board and fill the cells with '.'
    const board = Array(n).fill().map(row => Array(n).fill('.'));
    // start the traverse from row 0
    backtrack(board, 0);
    console.log(res.length)
    return res;
};

// path: rows above current row that have placed Queens
// available options to put the queens: all columns
// stop point: row === n
var backtrack = function(board, row) {
    if (board.length === row) {
        //take every row in the board and join the elements in every row into a string
        const solution = board.map(row => row.join(''));
        //push the final solution into an array
        res.push(solution);
        return;
    }
    
    for (let col = 0; col < board.length; col++) {
        if (!isValid(board, row, col)) continue;
        board[row][col] = 'Q';
        backtrack(board, row+1);
        board[row][col] = '.';
    }
}

// check if coordinate (row, col) is a vaild position to place the queen
// Only need to verify three dimensions:
// 1.top 2.top-left 3.top-right since the Queens are placed from top to bottom
var isValid = function(board, row, col) {
    const n = board.length;
    
    // check top vertical 
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false; 
    }
    
    // check top-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }
    
    // check top-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }
    
    return true;
}
