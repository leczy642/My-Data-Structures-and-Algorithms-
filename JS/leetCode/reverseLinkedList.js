var reverseList = function(head) {
    
	let previous = null;
	let current = head;
	
	while (current !== null){
		const next = current.next;
		
		current.next = previous;
		previous =  current;
		current = next;
	}
	//return prevous because it is the new head node
	return previous;
};
//example
//1->2->3->4->null
/*
initially
current = head
previous = null
next = current.next
--------------------
at current = 1;
current.next = previous
1 -> null
previous = current
1 -> null

current = next;
current = 2->3->4->null i.e current is now 2, and 2's next pointer points to 3, 3 points to 4, and 4 points to null
--------------
at current = 2;
current.next = previous
2->1->null i.e 2 points to 1, and one points to null
previous = current
previous = 2->1->null
current = next;
current = 3->4->null
----------------
at current = 3
current.next = previous
3->2->1->null i.e 3's next pointer points to 2, 2 points to 1 and 1 points to nulll
previous = current
previous = 3->2->1->null
current = next
current = 4->null
-----------------
at current = 4
current.next = previous
4->3->2-1->null i.e 4's next pointer points to 3, 3 points to 2, 2 points to 1 and 1 points to null
previous = current
previous = 4->3->2->1->null
current = next
current = null
-------------------
at current = null
the loop finally stops
*/
