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
