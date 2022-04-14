//https://www.youtube.com/watch?v=jfmJusJ0qKM
//score = stack.pop() + Math.max(score * 2, 1);
//(())
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
