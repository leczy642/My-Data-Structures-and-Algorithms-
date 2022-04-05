var isValid = function(s) {
    let stack = [];
       
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(s[i]);
        }else if(stack[stack.length - 1] === '(' && s[i] === ')'){
            stack.pop();
       }else if(s[i] === '['){
            stack.push(s[i]);
        }else if(stack[stack.length - 1] === '[' && s[i] === ']'){
            stack.pop();
        }else if(s[i] === '{'){
            stack.push(s[i]);
        }else if(stack[stack.length - 1] === '{' && s[i] === '}'){
            stack.pop();
        }else{
            return false
        }
    }
    return stack.length === 0;
    
};


