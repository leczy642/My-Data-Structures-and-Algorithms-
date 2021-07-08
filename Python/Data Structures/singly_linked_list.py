
class Node:
    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return "<node data : %s>" % self.data


class Linkedlist:

    def __init__(self):
        self.head = None

    def size(self):
        current = self.head
        count = 0

        while current:
            current = current.next_node
            count += 1

        return count

    # adds a new node to the head
    def add(self, data):
        new_node = Node(data)
        # swapping a value between the head and the next node
        new_node.next_node = self.head
        self.head = new_node

    # removes a particular node from a linkedlist
    # if the node is not at the head it has to traverse the list
    # to find the node
    def remove(self, key):
        current = self.head
        previous = None
        found = False

        # while current is not null and found is False
        while current and not found:
            # if the key is at the head
            if current.data == key and current is self.head:
                found = True
                self.head = current.next_node

            # elif the key is not at the head
            elif current.data == key:
                found = True
                previous.next_node = current.next_node
            # if the keyt is not in the list
            # move to the next element
            else:
                previous = current
                current = current.next_node

    # searches the entire list for an item
    # and returns the position if found
    # and None if not found
    def search(self, key):
        current = self.head
        position = 0

        # while the current node is not null
        while current:
            # if the key is in the list
            # return it's position
            if current.data == key:
                return position
            # else move to the next item on the list
            else:
                current = current.next_node
                position += 1
        return None

    # seaches for a node at a particular index
    def node_at_index(self, index):
        current = self.head
        position = 1

        # while initial postion is less than the index we are looking for
        # go to the next node
        # increment position by 1
        while position < index:
            current = current.next_node
            position += 1

        return current

    # inserts a node at a particular index
    # overall takes O(n) time
    def insert_at_index(self, data, index):
        # if index is 0, that is the head index
        # position is 0
        # enter the data at the head
        if index == 0:
            current = self.head
            # position = 0
            self.add(data)

        # if index > 0
        # position starts at 1
        # add a new node
        if index > 0:
            position = 1
            current = self.head
            new_node = Node(data)

            # the loop terminates when position is = to index
            # it will return the element before the target
            # since position starts at 1
            while position < index:
                current = current.next_node
                position += 1

            # store the previous node
            # the target becomes the next node
            prev_node = current
            next_node = current.next_node

            # swap values
            # save the new node in the node after the previous node
            # save the target/next_node in the next node to the new node
            prev_node.next_node = new_node
            new_node.next_node = next_node

        # new_node.next_node = previous
        # previous = new_node

    def delete_at_index(self, index):
        current = self.head
        previous = None
        position = 0

        # if the index is 0
        # delete the head
        if index == 0:
            self.head = current.next_node

        if index > 0:
            position = 1
            while position < index:
                current = current.next_node
                position += 1

            # store the previous, current and next nodes
            prev_node = current
            current = current.next_node
            next_node = current.next_node

            # removing the node
            # point the next node of previous to the next node
            prev_node.next_node = next_node

    def get_tail_node(self):
        current = self.head
        first = 0
        last = self.size() - 1

        while first < last:
            current = current.next_node
            first += 1

        return current

    def printList(self):
        current = self.head
        while current:
            print(current.data, end='->')
            # print(current.data)
            current = current.next_node


l = Linkedlist()
l.add(1)
l.add(2)
l.add(3)
l.add(4)

print("linked list before deleting")
print(l.printList())
print("Size is:", end='')
print(l.size())
print("Adding nodes to index 1 and 2")
l.insert_at_index(5, 1)
l.insert_at_index(6, 2)
print(l.printList())
print("Size is:", end='')
print(l.size())
print("deleting a node at index 2")
l.delete_at_index(2)
print(l.printList())
print("Size is:", end='')
print(l.size())
print("removing node 5")
l.remove(5)
print(l.printList())
print("searching for node 3 and returning it's index")
print(l.search(3))
print("searching for a node at index 0")
print(l.node_at_index(0))
print("returning the tail node")
print(l.get_tail_node())


