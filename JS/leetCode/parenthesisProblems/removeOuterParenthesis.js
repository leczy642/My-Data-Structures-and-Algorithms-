//Sumary
//each time we find an opening brace
//--check to see if the stack is empty, if it's not then push the current open brace into the results array
//----push the current open brace into the stack
//else, when we find a closing brace
//pop the last element from the stack
//then check if the stack is empty, it is not we push the current closing brace into the results array
//return the results
//https://leetcode.com/problems/remove-outermost-parentheses/discuss/1851476/Easy-Javascript-Solution
//https://www.youtube.com/watch?v=iCAZZgD8kNw
//Using a stack
var removeOuterParentheses = function(s) {
    const stack = [];
    const result = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
           if(stack.length > 0){
              result.push('(')
              } 
           stack.push(i)
           }else{
               stack.pop();
               if(stack.length > 0){
                  result.push(')')
                }
           }
    }
    return result.join('');
};

//version 2
//using a counter
//PROCEDURE
//1. iniitialize a variable(openParenthesisCount) to store the number of open parenthesis found
//2. initialize a variable(result) to store valid parenthesis without their outermost parenthesis
//3. traverse the input string
//     a. if the current string is '(': 
//          --check if openParenthesisCount > 0:
//             -- append the current string '(' into the results variable
//          --increase the value of openParenthesisCount by 1
//     b. else (the current string is a ')'):
//              --decrease the value of openParenthesisCount by 1
//              --check if openParenthesisCount > 0:
//                -- append the ')' into the results variable
//4. return the result


var removeOuterParentheses = function(s) {
    let openParenthesisCount = 0;//counts the number of open parenthesis found
    let result = "" //stores valid parenthesis string without the outermost parenthesis
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
           if(openParenthesisCount > 0){
                result += s[i];  
            }
            openParenthesisCount += 1;
        }else{
            openParenthesisCount -= 1;
            if(openParenthesisCount > 0){
               result += s[i];
            }
        }
    }
    
    return result;
};

var removeOuterParentheses = function(s) {
    let openParenthesisCount = 0;//counts the number of open parenthesis found
    let result = "" //stores valid parenthesis string without the outermost parenthesis
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
           if(openParenthesisCount > 0){
                result += s[i];  
            }
            openParenthesisCount += 1;
        }else{
            openParenthesisCount -= 1;
            if(openParenthesisCount > 0){
               result += s[i];
            }
        }
    }
    
    return result;
};
