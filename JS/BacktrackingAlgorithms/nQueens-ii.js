/**
 * @param {number} n
 * @return {number}
 */
var res;
var totalNQueens = function(n) {
    res = [];
    // initiate the chess board
    const board = Array(n).fill().map(row => Array(n).fill('.'));
    // start the traverse from row 0
    backtrack(board, 0);
    console.log(res.length)
    return res.length;
};

var backtrack = function(board, row) {
    if (board.length === row) {
        const solution = board.map(row => row.join(''));
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

var isValid = function(board, row, col) {
    const n = board.length;
    
    // check top
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false; 
    }
    
    // check top-left
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }
    
    // check top-right
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }
    
    return true;
}
