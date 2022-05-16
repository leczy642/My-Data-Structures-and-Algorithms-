//Time O(n) | space O(n)
//Procedure
//push all the values in the linked list into an array
//compare the right and left element
//  --if the element on the left is not equal to that on the right
//      --return false
//return true
//
var isPalindrome = function(head) {
    let current = head;
    let values = [];
    
    while(current !== null){
       // push all the values in the linked list into an array
        values.push(current.val)
        current = current.next;
    }
    
    let left = 0;
    let right = values.length - 1;
    
    while(left < right){
        //if the element on the left is not equal to that on the right
        if(values[left] !== values[right]){
            //return false
           return false;
         }
        left++;
        right--;
    }
    //return true
    return true;
};
