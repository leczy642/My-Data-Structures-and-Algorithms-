//time O(n + m) or O(Max(n,m)) | space O(n) -> n = no of nodes in list 1 and m is the number of nodes in list 2
//time complexity explanation
//https://www.quora.com/What-is-the-time-complexity-of-this-If-you-have-one-array-of-size-M-and-another-array-of-size-N-and-you-iterate-through-each-seperately-What-is-the-time-complexity-O-M-N-or-O-max-M-N
//solution 
//https://leetcode.com/problems/add-two-numbers/discuss/2036430/Java-2ms-Solution.-90-Faster
//https://www.youtube.com/watch?v=aM4Iv7eEr2o
//https://www.youtube.com/watch?v=wgFPrzTjm7s&t=2s
//https://www.youtube.com/watch?v=zSwAnsQp09k&t=26s
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);//declare a dummy node//previous node
    let l3 = dummy;//current node
    let carry = 0; //initialize carry
    
    while(l1 !== null || l2 !== null){
          
       // let val1 = l1.val || 0;//is current node value or 0 if none
        //let val2 = l2.val || 0;//is current node value or 0 if none
        //use of ternary
        let val1 = (l1 !== null) ? l1.val : 0; //val1 == l1
        let val2 = (l2 !== null) ? l2.val : 0;
        
        //find currentSum, carry and last digit
        let currentSum = val1 + val2 + carry;
        carry = Math.floor(currentSum/10);
        let lastDigit = currentSum % 10;
        
        //add the last digit to the tail of the dummy node
        let new_node = new ListNode(lastDigit);//lastDigit is not a node but a value so we have to create convert it to a node by doing new ListNode(lastDigit)
        l3.next = new_node;
        
        //move pointers for l1,l2 and l3 forward
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        l3 = l3.next;   
    } 
    //check for any remaining carry and add that to the dummy node
    if(carry > 0){
       let new_node = new ListNode(carry);
        l3.next = new_node;
       }
    return dummy.next
};
//procedure 
/*
//declare a dummy node//previous node
//initialize l3 equals dummy node// current node
//initialize carry to 0
//traverse list1 and list 2
//  --add l1,l2 and carry to get currentsum
//  --floor divide currentSum by 10 to get carry
    --modulo currentsum by 10 to get last digit
    --convert the lastdigit to a node and add to the tail of the dummy node
    move l1,l2,l3 pointers forward
//when the loop ends check for any remaining carry and add that to the tail of dummynode
//return dummynode next node
*/
