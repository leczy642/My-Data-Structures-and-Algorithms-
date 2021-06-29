/**
 * selection sort takes the smallest element in an unsorted array and moves it
 * into a sorted array
 * Run-Time
--------
Time complexity : Takes O(n^2) time
Space complexity : Takes O(1) time
 */
function selectionSort(values){
   // var sortedList = [];
    var sortedList = [];

    while(values.length > 0){
        //grab the index of the least element
        //var leastIndex = minIndex(values);
        var indexToMove = indexOfMin(values);
        //remove the least element from the unsorted array and
        //push the least element into the sorted array
        sortedList.push(values.splice(indexToMove, 1)[0]);
    }

    return sortedList;
}

/**
 * minIndex() Takes an array and returns the index of the smallest element
 **/
 function indexOfMin(values){
    var leastIndex = 0;

    for (i = 0; i < values.length; i++){
        if(values[i] < values[leastIndex]){
            
            leastIndex = i;
        }
    }
    return leastIndex;
}

let arr = [9,0,8,1,3,2,5];

console.log(indexOfMin(arr));
console.log(selectionSort(arr));