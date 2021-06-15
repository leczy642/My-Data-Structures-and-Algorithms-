//lst is an array of items
//taget is the value we are looking for 
//start is the starting index
//end is the ending index
function recursiveBinarySearch(lst, target, start=0, end=(lst.length-1)){
    let midPoint = (Math.floor((start+end)/2));

    //if the element doesn't exist in the array 
    if (start > end){
        return false;
    }
    //if the element is at the mid-point
    if (lst[midPoint] === target){
        return true;
    }
    else{
        if(lst[midPoint] < target){
            return recursiveBinarySearch(lst, target, midPoint+1, end);
        }
        else{
            return recursiveBinarySearch(lst, target, start, midPoint-1);
        }
    }
    
}
let arr = [1,2,3,4,5];
let target = 8;

console.log(recursiveBinarySearch(arr, target));
//console.log(binarySearch(arr, target));

