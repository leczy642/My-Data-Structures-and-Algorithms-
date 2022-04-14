//question : https://leetcode.com/problems/different-ways-to-add-parentheses/
//https://javascript.info/recursion
//https://www.youtube.com/watch?v=Fdr81zRRByo
var diffWaysToCompute = function(expression) {
    const result = [];
    
    //loop through the input string
    for(let i = 0; i < expression.length; i++){
        let currentString = expression[i];
        //if we find an operator we will split the input string into two
        //by recursive calling the right and left side<into the call stack>
        if(currentString === '+' || currentString === '-' || currentString === '*'){
        let left = diffWaysToCompute(expression.substring(0,i));
        let right = diffWaysToCompute(expression.substring(i+1));
        
            //grab all the elements on the left and right
        left.forEach(leftElement => {
            right.forEach(rightElement => {
                if(currentString === '+'){
                    result.push(leftElement + rightElement);
                }if(currentString === '-'){
                    result.push(leftElement - rightElement);
                }
                if(currentString === '*'){
                    result.push(leftElement * rightElement);
                }
              });
            });
            
        }  
    }
    
    //if there are no operators
    //convert the input string to an integer and push into the
    //results array
    if(result.length === 0){
        result.push(parseInt(expression));
    }
    return result;
};
