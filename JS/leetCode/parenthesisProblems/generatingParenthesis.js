//Time O(2^n) || Space O(n)
//https://www.youtube.com/watch?v=s9fokUqJ76A
//https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/
//https://leetcode.com/problems/generate-parentheses/submissions/
var generateParenthesis = function(n) {
    //only add open parenthesis if open < n
    //only add closed parentheis if closed < open
    //base case if open === n && closed === open
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

// Complexity Analysis: 

// Time Complexity: O(2^n). 
// For every index there can be two options ‘{‘ or ‘}’. So it can be said that the upper bound of time complexity is O(2^n) or it has exponential time complexity.
// Space Complexity: O(n). 
// The space complexity can be reduced to O(n) if global variable or static variable is used to store the output string.
