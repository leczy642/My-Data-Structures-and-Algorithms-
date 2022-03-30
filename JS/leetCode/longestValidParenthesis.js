var longestValidParentheses = function(s) {
    const stack = [-1]
    let max = 0 // max = max(i - stack[stack.length - 1])//stack[stack.length - 1] is the peak of the stack
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
           stack.push(i);
         }else{
             stack.pop();
             if(stack.length === 0){
                stack.push(i)
            }else{
                // i - stack[stack.length - 1] is length of longest substr
                max = Math.max(max, i - stack[stack.length - 1]); //max(0, 1 - -1) = 2;
            }
         }
    }
        
    return max;
};
