/**
 * Quick sort starts with an element known as the pivot. It takes all the element less than the pivot and
stores them in one array and takes elements greater than the pivot stores them in another array. it recursively sorts
both arrays (less_than_pivot and greater_than_pivot), when the list has been sorted it merges the
lists (less_than_pivot, pivot, greater_than_pivot)
Run-Time
--------
Time complexity : Takes O(n2)(worst case) and O(n Log n) best case
Space complexity : Takes O(log n) time
 */


function quickSort(values){
    // condition to terminate to the recursion
    if(values.length <= 1){
        return values;
    }

    // initialize the pivot, list less than pivot, and list greater than pivot
    var pivot = values[0];
    var lessThanPivot = [];
    var greaterThanPivot = [];

    // a for loop from the second index to the end of the array
    // we are starting from one because element with index zero
    // is the pivot
    for(var i = 1; i < values.length; i++){
        // the element is less than the list
        // append it to the left of the pivot
        if(values[i] <= pivot){
            lessThanPivot.push(values[i]);
        }
        // else, append to the right of the pivot
        else{
            greaterThanPivot.push(values[i]);
        }
    }
    // return the merged list
    return quickSort(lessThanPivot).concat(pivot).concat(quickSort(greaterThanPivot));
}

let arr = [9,8,0,1,3,2,5];

console.log(quickSort(arr));