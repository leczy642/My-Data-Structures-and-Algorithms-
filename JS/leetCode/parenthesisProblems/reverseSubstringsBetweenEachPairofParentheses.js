//https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/submissions/

//https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/discuss/1472895/Javascript-Stack-Solution
//Input: s = "(u(love)i)"
//Output: "iloveu"
var reverseParentheses = function(s) {
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== ')'){
         stack.push(s[i]);  
         }else{
             let string = [];
             while(stack[stack.length - 1] !== '('){
                  string.push(stack.pop()); 
            }
             stack.pop();
             stack.push(...string)
         }
    }
    return stack.join("");
};
