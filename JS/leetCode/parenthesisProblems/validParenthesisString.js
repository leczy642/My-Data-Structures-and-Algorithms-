//Time O(n), Space O(n)
//procedure 1 using stacks
//1. loop through the array
    //  ---if we find an open parenthesis we push it to the openStack
    //  ---else if we find a star we push it to the starStack
    //  ----else (the current element is a closing brace)
    //          ---if the openStack is not empty, then we pop() the openStack
    //          --- else if the starStack is not empty, the we pop() the starStack
    //          --- else we return false because there is no matching opening parenthesis for   //the current closing parenthesis
    // the loop ends, then we come out of the loop.
    
    //2. if we have any remaining opening parenthesis and star parenthesis in the openStack and starStack we need to ensure that the string is a valid parenthsis string
    //   ---initialize counters for openStack and starStack
    //   ---while the current openStack < current starStack
    //       ---pop the openStack
    //       ---pop the starStack
    //       ---decrease both counters
    
    //3. return true if the openStack.length is 0

var checkValidString = function(s) {
    //also try this test case
    //'(*(**)'
    const openStack = [];
    const starStack = [];
    
    //if the current element is an open parenthesis we push 
    //it inside the stack
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
           openStack.push(i);
         }else if(s[i] === '*'){
            starStack.push(i);      
         }else{
             if(openStack.length > 0){
                 openStack.pop()
             }else if(starStack.length > 0){
                 starStack.pop(); 
             }else{
                 return false
             }
         }
    }
    
    let i = openStack.length - 1;
    let j = starStack.length - 1;
    
    //here we will remove any remaining matching opening braces
    //and asterics
    while(openStack[i] < starStack[j]){
          openStack.pop();
          starStack.pop();
        
          i--;
          j--;
    }
    
    // if(openStack.length === 0){
    //    return true
    //    }else{
    //        return false
    //   }
    return (openStack.length === 0)
};
