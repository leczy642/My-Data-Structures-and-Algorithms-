//Time O(n)  | Space O(n)
//Sumaary
//if current element in the array is not in the hashmap, push it into it
//else i.e the element is in (its duplicated) return true
//after the loop return false.
var containsDuplicate = function(nums) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i]) == false){
           map.set(nums[i], 1)
        }else{
            return true
        }
    }
    return false;
};
