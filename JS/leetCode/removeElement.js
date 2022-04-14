//solution: https://leetcode.com/problems/remove-element/discuss/1946548/JavaScript-solution-using-while-loop-and-splice
//question: https://leetcode.com/problems/remove-element/submissions/
//Input: nums = [0,1,2,2,3,0,4,2], val = 2
//Output: [0,1,3,0,4]
var removeElement = function(nums, val) {
    //using an if statement inside a forloop will cause 
    //the splice remove function to only remove a single occurrence
    //and not all occurence
    while(nums.includes(val)){
        nums.splice(nums.indexOf(val), 1);      
    }
    return nums.length // it's not really necessary to return this because we are modifying the array in place.
};
