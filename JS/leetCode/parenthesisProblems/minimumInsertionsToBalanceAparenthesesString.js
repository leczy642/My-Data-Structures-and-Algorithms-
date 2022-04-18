//Input: s = "))())("
//Output: 3
//Input: s = "())"
//Output: 0
//Input: s = "(()))"
//Output: 1
//Input: s = "(((("
//Output: 8
//question link : https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/
//solution: https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/discuss/1055226/JavaScript-Solution
var minInsertions = function(s) {
    let left = 0; // left paren not paired so far
    let count = 0; 
    
    //traverse the string 
    for (let i = 0; i < s.length; i++) {
        //get the current character
        const char = s.charAt(i);
        
        //if the current char is an open brace
        //increment left parenthesis count
        if (char === "(") {
            left++;
        }//else if it is not an open brace. we check for 2 conditions
        else { // char === ")"
            //1. if the left parenthesis is zero, increment count, else decrement the left parenthesis
            if (left === 0) count++;
            else left--;
            
            //2. if the next character to the curent element is not a closing parenthesis, increment the count, else increment the index before the next iteration
            if (s.charAt(i + 1) != ")") count++;
            else i++;     
        }
    }
    
    //return the final value
    return count + left * 2;
};
