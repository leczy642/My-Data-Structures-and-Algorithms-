/**
Binary search locates the position of an element in a sorted array
by repeatedly dividing in half the portion of the list that can contain the item, until
it has narrowed down the position to just one.
Time Complexity : O(Logn)
Space Complexity : O(1)
*/
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
