/*Given an unsorted array arr find the sum of num numbers in
in the array
*/
function maxSubarraySum(arr, num) {
    //this ensures that the num of digits to be added together
    //does not exceed the length of the array
    if ( num > arr.length){
      return null;
    }
    //initialize the value of max to negative infinity instead on null
    //this allows us to compare max with other numbers
    //because you cannot compare null and a number it will give 
    //errors
    var max = -Infinity;
    //the first forloop doesn't go all the way to the end of the array 
    //remember that arithmetics in javascript go from left to right
    for (let i = 0; i < arr.length - num + 1; i ++){
      //initialize our temporary variable to zero
      temp = 0;
      //the value of j will not exceed num
      for (let j = 0; j < num; j++){
        //the sum is stored in a temporary variable
        temp += arr[i + j];
      }
      //if the temp is greater than max
      //store tha value of temp in max
      if (temp > max) {
        max = temp;
      }
    }
    //return max
    return max;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)