# useful links
# https://www.geeksforgeeks.org/stack-in-python/
# https://dmitripavlutin.com/swap-variables-javascript/
# https://www.geeksforgeeks.org/stack-data-structure/?ref=ghm

"""
The code below is an implementation of a Stack using a Linked List
Stack operations include: push(), pop(), peek()
"""
class Node:
    """
       An object for storing a single node in a linked list

       Attributes:
           data: Data stored in node
           next_node: Reference to next node in linked list
       """
    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return '<Node : %s>' % self.data

class Stack:

    def __init__(self):
        self.head = None

    # determines if the stack is empty
    # takes O(1) time
    def is_empty(self):
        return self.head == None

    # return the size of the stack
    # takes O(n) time
    def size(self):
        count = 0
        current = self.head

        while current:
            current = current.next_node
            count += 1

        return count

    # pushing an item into the stack
    # this takes O(1) time
    def push(self, data):
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node

    # removing an element from the stack
    # takes O(1) time
    def pop(self):
        size = self.size()
        if self.is_empty():
            return None
        else :
            # change the value of the head node to now reflect the next node
            self.head = self.head.next_node
            # decrease the size of the list
            size -= 1

    # return the element at the top of the stack
    # this takes O(1) time
    def peek(self):
        if self.head == None:
            return None
        return self.head
        #or return self.head.data

    def __repr__(self):
        nodes = []
        current = self.head
        while current:
            if current is self.head:
                nodes.append("[Peek: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next_node
        return '-> '.join(nodes)


