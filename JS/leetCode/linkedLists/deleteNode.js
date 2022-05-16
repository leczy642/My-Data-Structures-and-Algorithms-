//Time O(1) | space O(1)
//solution
//4->5->1-9
//becomes 4->1->1->9
//becomes 4-
var deleteNode = function(node) {
    node.val = node.next.val//convert the input node's value to the value of its next node
    node.next = node.next.next;//point the next node to it's next node
    
};
