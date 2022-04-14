var generateParenthesis = function(n) {
    const result = [];
    
    const backtrack = (open, close, string, result) => {
        //base case
        //n is our input
        //anytime open is equal to n and close equal to n
        //push the current string into the result
        if(open === n && close === n){
           result.push(string);
           return;
         }
        //Recursive call
        //recursively call backtrack function if open is less than n
        //this would backtrack to sub functions in the callstack and repeat the same process
        if(open < n){
            //recursively call backtrack then increase open by one and
            //append an open parenthesis
            backtrack(open + 1, close, string+"(", result);
        }
        //Recursive call 2
        //recursively call backtrack function if close is less than open
        //this would also backtrack to sub functions in the callstack and repeat the same               //process
        if(close < open){
        //recursively call backtrack then increase close by one and
        //append a closing parenthesis
        backtrack(open, close + 1, string+")", result);
        }
        
    }
    
    backtrack(0,0,"",result);
    return result;
}

n = 3;
console.log(generateParenthesis(3));
