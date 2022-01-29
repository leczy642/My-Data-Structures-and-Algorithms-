//this function moves(rotates) the array elements by k steps
function rotateArray(nums, k){
  nums.reverse();
    k = k % nums.length;
    const reverse = (l, r) => {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
    reverse(0, k - 1);
    reverse(k, nums.length - 1)
}

//input : nums = [1,2,3,4,5,6,7], k = 3
//output : [5,6,7,1,2,3,4]
