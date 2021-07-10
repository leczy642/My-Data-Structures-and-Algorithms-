/*Given an unsorted array arr find the maximum sum of num numbers in
in the array
Takes O(n) time
*/
function maxSubarraySum(arr, num){
    //initialize the maximum and temporary sum to zero
    let maxSum = 0;
    let tempSum = 0;

    //ensure that num doesn't exceed the size of the array
    if (arr.length < num) return null;
    
    //start a forloop for the first num elements
    //we are not traversing the entire array
    for (let i = 0; i < num; i++) {
      //sum the first num numbers 
      maxSum += arr[i];
    }
    //save the sum of the num numbers in a temporary variable 
    tempSum = maxSum;

    //start another forloop that begins from num and ends 
    //before the length of the array
    for (let i = num; i < arr.length; i++) {
      //the sliding window starts here 
      //you continously subtract the sum of left side (arr[i - num]) and the right side (arr[i])
      //of the window from the sum of the first num elements
      //i.e tempSum = tempSum - arr[i - num] + arr[i]
      tempSum = tempSum - arr[i - num] + arr[i];
      //get the maximum number between 
      maxSum = Math.max(maxSum, tempSum);
    }
    //return the maximum sum
    return maxSum;
  }
  
  console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))
  