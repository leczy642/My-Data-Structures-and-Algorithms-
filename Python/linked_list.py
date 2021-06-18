"""
useful links:
https://teamtreehouse.com/library/introduction-to-data-structures/building-a-linked-list/linked-lists-operations
https://www.youtube.com/watch?v=8hly31xKli0&lc=Ugyg3dNyhZS4EHf6hGF4AaABAg
"""
class Node :

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
        return "<node data : %s>" % self.data

    """
    Singly Linked List 
    """

class Linkedlist:
    """
    Singly Linked List 
    Linear data structure that stores values in nodes. The list maintains a reference to the first node, also called head. 
    Each node points to the next node in the list

    Attributes:
        head: The head node of the list
  
    in the constructor we initialize the head as none,
    in other words we are creating/initializing an empty list
    
    """
    #head = None

    def __init__(self):
        self.head = None

    """
        Determines if the linked list is empty
        Takes O(1) time
    """

    def is_empty(self):
        return self.head == None

    """
    size returns the number of nodes in the list
    it returns zero if empty else a number greater than zero
    Takes O(n) time 
    """

    def size(self):
        """
        returns the number of nodes in the list
        Takes O(n) time
        """
        current = self.head
        count = 0

        while current:
            count +=1
            current = current.next_node

        return count

    def add(self, data):
        """
        adds new node containing data at the head of the list
        takes O(1) time 
        """
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node


    def search(self, key):
        """
        Search for the first node containing data that matches the key
        Returns the node or `None` if not found
        Takes O(n) time
        """

        current = self.head

        while current:
            if current.data == key :
                return current.data
            else:
                current = current.next_node
        return None


    def insert(self, data, index):
        """
        Inserts a new Node containing data at index position
        Insertion takes O(1) time but finding node at insertion point takes
        O(n) time.
        Takes overall O(n) time.
        """

        #get the size of the list
        list_size = self.size()

        if index > list_size :
            return "out of range"

        if index == 0 :
            self.add(data)

        if index > 0 :
            new_node = Node(data)
            position = index
            current = self.head

            # what is position ?
            while position > 1 :
                current = current.next_node
                position -= 1
                # why is position decreasing ?

            prev_node = current
            next_node = current.next_node

            prev_node.next_node = new_node
            new_node.next_node = next_node

        #increase the list size
        list_size += 1

    def remove(self, key):
        """
        Removes Node containing data that matches the key
        Returns the node or `None` if key doesn't exist
        Takes O(n) time
        """
        current = self.head
        previous = None
        found = False

        while current and not found :
            if current.data == key and current is self.head:
                found = True
                self.head = current.next_node

            elif current.data == key :
                found = True
                previous.next_node = current.next_node

            else:
                previous = current
                current = current.next_node


    def __repr__(self):
        """
        Return a string representation of the list.
        Takes O(n) time.
        """
        nodes = []
        current = self.head
        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next_node is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next_node
        return '-> '.join(nodes)

