//https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/2030633/javascript-O(n)-time-O(1)-space
//https://www.youtube.com/watch?v=XtYEEvrhemI
// Time O(n) | Space O(1)
// summary
// declare a dummy node and set to zero
// set the dummy's next node to the head
// declare a fast and slow node and set them both to the dummyHead
// move the fast node n places forward
// move the fast and slow node until the fast node equals null, the slow node then stops immediately before the node to be removed
// set the slow node's next node to the slow node's next node next node
// return the dummy's next node
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let fast = dummyHead; //0->1->2->3->4->5->null
    let slow = dummyHead; //0->1->2->3->4->5->null
    
    //move the fast pointer foward n places
    for(let i = 0; i <= n; i++){
        fast = fast.next;
    }
    //move the slow and fast pointer together, with the fast pointer starting at it's new position
    while(fast !== null){
    fast = fast.next;
    slow = slow.next;
    }
    
    slow.next = slow.next.next;
    
    return dummyHead.next;
    
};
