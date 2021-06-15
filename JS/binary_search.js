//lst is an array of items
//taget is the value we are looking for 
function binarySearch(lst, target){
    let first = 0;
    let last = lst.length - 1; 

    while (first <= last){
        const mid = (Math.floor((first+last)/2));

        if(lst[mid] === target){
        return mid;
        }
        if(lst[mid] < target){
            first = mid + 1;
        }
        else{
            last = mid - 1;
        }
    }
}

let items = [1,2,3,4,5,6,7,8];
let targetElement = 8;

console.log(binarySearch(items, targetElement));