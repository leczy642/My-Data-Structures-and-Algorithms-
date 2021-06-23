//useful links:
//https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2
/**
 * Merge_sort() takes a list as a parameter and returns a sorted list
 * Run Time
 * Time Complexity : O(nLogn)
 * Space Complexity : O(n)
 */
function merge_sort(list){
    
    if(list.length <= 1) return list;
    //step 1: getting the midpoint
    const middle_index = Math.floor(list.length/2);

    //recursively slice the array into two parts 
    let left_values = merge_sort(list.slice(0,middle_index));
    let right_values = merge_sort(list.slice(middle_index));

    //merge the array
    return merge(left_values,right_values);

   
}

function merge(left_list, right_list){
    let sorted_list = [];
    let right_index = 0;
    let left_index = 0; 

  while (left_list.length && right_list.length) {
    //if the left side is smaller than the right side, then
    //push the left element on the list sorted list and dcrease the array
    if (left_list[left_index] < right_list[right_index]){
        //sorted.push(arr1[left_index]); -> doing this causes memory allocation
        sorted_list.push(left_list.shift())
    }
    else sorted_list.push(right_list.shift());
  }

  /* At this point there are still some elements on the
    right and left side that are not yet included in the sorted list
  copy both the right and left elements to the sorted list*/

  while(left_index < left_list.length){
    sorted_list.push(left_list.shift());
    left_index +=1;
  }
  while(right_index < right_list.length){
    sorted_list.push(right_list.shift());
    right_index +=1;
  }

  //return the sorted list
  return sorted_list;
  //return sorted.concat(left_values.slice().concat(right_values.slice()));
}
//let arr = [1,2,3,4,5,6,7,8];
const arr = [3,2,1,4,5,6,9];
//console.log(merge_sort(arr));
//console.log(merge([2, 5, 10, 57], [9, 12, 13]));
console.log(merge_sort(arr));