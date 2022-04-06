//https://leetcode.com/problems/remove-outermost-parentheses/discuss/1851476/Easy-Javascript-Solution
//https://www.youtube.com/watch?v=iCAZZgD8kNw
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
