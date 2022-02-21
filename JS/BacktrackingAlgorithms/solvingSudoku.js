//1. get the next empty cell
//2. get the possible values for that cell
//3. if the 
function solveSudoku(board){
    //get the next empty cell
    let [row, col] = findNextEmptyCell(board);//[0,2]
   

    //Base Case
    //our base case is when we have gone through the entire board and we have found an empty cell
    if(row == null || col == null){
        return true;
    }

   
    //find all the possible values from 1 to 9 for the current empty cell
    //please note that the current value might be valid but might not be a good guess
    for(let guess = 1; guess < 10; guess++){
        //if tghe current num is valid for the current cell
        if(is_valid(board, guess.toString(), row, col)){ 
            //we save the current num in the cell of the board
            board[row][col] = guess.toString();
            //we would recursively call the solveSudoku function with a new board
            //if the solveSoduku function returns true, it means we have solved the new board with the current value
            //it means that the current value is a good guess
            //note: though the solveSudoku function is called here, it is not the final solution. control will still return to the main solveSudoku function above
            if(solveSudoku(board)){
                //this return statement teerminates the inner solveSudoku function but not the outer solveSudoku function
                return true
            }
            //else if we cannot solve the sudoku board we backtrack and try the next value
            board[row][col] = '.';
        }
    }
    return false;
}

//this grabs the current empty cell in the board
function findNextEmptyCell(board){
    //traverse through the board which is a 2d array
    //r represents the rows and c represents te columns
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            //if we find an empty cell denoted by a '.'
            //the we return the index of the row and column
            if(board[r][c] == '.'){
                return [r,c];
            }
        }
    }
    //else if we go through the entire board and we cannot find an empty cell
    //we return null
    return [null, null];
}


//checks the row, column and the subgrid to see if the current value is valid
function is_valid(board, guess, row, col){
        //check the rows and columns
        for(let i = 0; i < 9; i++){
            //if the current value is found in the row or column
            //then we return false
            if(board[row][i] == guess || board[i][col] == guess){
                return false;
            }
        }
        //check the subgrid
        //the subgrid is a 3 x 3 submatrix
        let rowStart = Math.floor(parseInt(row / 3)) * 3;
        let colStart = Math.floor(parseInt(col / 3)) * 3;
        

        //traverse the subgrid
        //r represents the subGrid rows and c represents the subGrid columns
        for(let r = rowStart; r < rowStart + 3; r++){
            for(let c = colStart; c < colStart + 3; c++){
                if(board[r][c] == guess){
                    return false;
                }
            }
        }
        //if the value is not found in the row, column or subgrid
        //that means it is valid so we return true
        return true;
}

const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]

console.log(solveSudoku(board));
console.log(board);
