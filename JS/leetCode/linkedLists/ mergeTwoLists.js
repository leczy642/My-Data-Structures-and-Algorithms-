//question
//https://leetcode.com/problems/merge-two-sorted-lists/
//solution
//https://www.youtube.com/watch?v=K63Mjf-H0B0
//procedure
//traverse list1 and list2
//  --if current l1.val < current l2.val
//    --add current l1 to the output list
//    --move to the next node in l1
//  --else
//     --add current l2 to the output list
//     --move to the next node in l2
//we check for remaining nodes in list1 and list2
//if list1 is not null
//--add the remaining list1 to the tail of the output list(outputlist.next)
//else if list2 is not null 
//--add the remaining list2 to the tail of the output list(outputlist.next)
//return the output list tail(outputlist.next)
//Time O(n+m) | Space O(n)
var mergeTwoLists = function(l1, l2) {
    //create a dummmy node
    let dummy = new ListNode(-1);//our output list
    let dummyTail = dummy;
    
    //traverse the l1 and l2
    while(l1 !== null && l2 !== null){
         if(l1.val < l2.val){//if current l1.val < current l2.val
            dummy.next = l1;//add current l1 to the output list
            l1 = l1.next;//move to the next node in l1
         }else{
             dummy.next = l2;
             l2 = l2.next;
         } 
        dummy = dummy.next;//move to the next node, that's how we iterate a linked list
    }
    //we check for remaining nodes in list1 and list2
    if(l1){//if list1 is not null
      dummy.next = l1; //--add the remaining list1 to the tail of the output list
     }else{
      dummy.next = l2;//--add the remaining list2 to the tail of the output list
     }
    return dummyTail.next;//return dummy nodes starting from the tail and excluding the -1 dummy value at the beginning.
};
