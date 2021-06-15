//lst is an array of items
//taget is the value we are looking for 
function linearSearch(lst, target){
    for(let i = 0; i < lst.length; i++){
        if(lst[i] === target){
            return i;
        }
    }
    return -1;
}
  
let items = [1,2,3,4,5,6,7,8,9];
let targetElement = 9;

console.log(linearSearch(items, targetElement));