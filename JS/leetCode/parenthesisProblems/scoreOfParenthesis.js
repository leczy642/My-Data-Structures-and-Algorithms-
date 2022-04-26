//https://www.youtube.com/watch?v=jfmJusJ0qKM
//score = stack.pop() + Math.max(score * 2, 1);
//(())
//https://www.youtube.com/watch?v=jfmJusJ0qKM
//score = stack.pop() + Math.max(score * 2, 1);
//(())
//Time: O(n), Space O(n)
//procedure
//1. initialize a stack (called openStack) to store the scores
//2. initialize a variable (called score) to hold the current score, initially set to 0
//3. traverse the string
//   --if the current string is an open parenthesis
//       --push the current score to the stack
//       --reset the score value to 0
//   --else the current string is a closing parenthesis
//       --calculate the current score (score = max(score * 2, 1) + stack.pop())
//    break out of the loop
// return the score
var scoreOfParentheses = function(s) {
   const openStack = [];
    let score = 0;
    
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
         openStack.push(score);
            score = 0;
         }else{
             score = openStack.pop() + Math.max(score * 2, 1);
         }
    }
    return score;
};
