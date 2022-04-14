//question: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
//Method 1: using a stack
//solution : https://www.geeksforgeeks.org/find-maximum-depth-nested-parenthesis-string/
var maxDepth = function(s) {
    const stack = [];
    let count = 0;
    
    //traverse the input string
    for(let i = 0; i < s.length; i++){
        //if the current character is an open brace
        //push into the stack
        if(s[i] === '('){
          stack.push(i)
        }else if(s[i] === ')'){//else if it is a closing 
            //check if the count is less than the stack length
            if(count < stack.length){
                //update count
               count = stack.length;
            }
             stack.pop();//pop the last element from the stack
        }
    }
    return count;
};
