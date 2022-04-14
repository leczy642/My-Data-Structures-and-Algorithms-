//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/discuss/777292/JavaScript-Clean-3-Different-Stack-Solutions
//https://www.youtube.com/watch?v=FTo1kDyE-h4
var minRemoveToMakeValid = function(s) {
    
    const arr = s.split('');
    const stack = [];//3,5
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '('){
           stack.push(i);
        }else if(arr[i] === ')'){
        //if the stack is not empty pop the elemnt from the stack
         if(stack.length > 0){ 
            stack.pop();
            }else{
                //if there are no open parenthesis in the stack remove the 
                //current closing parenthesis right away
                arr[i] = '';
            }
        }
    }
    //remove any remaining invalid open parenthesis
    for(let i of stack){
        arr[i] = '';
    }
    //return the final joined result
    return arr.join('');
};
