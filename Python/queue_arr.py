"""
The following programme illustrates how to implement
a Queue using an array
"""
class Queue:

    def __init__(self, capacity):
        self.collection = []
        self.capacity = capacity
        self.head = 0
        self.tail = 0

    # view the queue in array form
    def view_stack(self):
        return self.collection

    # enqueue function adds an element to the queue
    # if the tail of the queue and the max capacity are equal then
    # then the queue is full, return an error
    # takes O(1) time
    def enqueue(self,data):
        # if queue capacity is full return an error message
        if self.capacity == self.tail:
            return False
        # else add a new element to the queue
        else:
            self.collection.append(data)
            self.tail += 1


    # dequeue removes the first element in the queue
    # first you try to determine if the queue is empty
    # if it isn't, then take out the first element in the queue
    # takes O(n) time
    def dequeue(self):
        if self.is_empty():
            return False
        else:
            self.collection.pop(0)
            self.tail -= 1

    # front returns the first element of the Queue
    # first determines if the list is empty
    # if it is, it returns False
    # otherwise it returns the first element of the list
    # Takes O(1)
    def front(self):
        if self.is_empty():
            return False
        else:
            return self.collection[self.head]

    # back returns the last element of the Queue
    # first determines if the list is empty
    # if it is, it returns False
    # otherwise it returns the first element of the list
    # Takes O(n)
    def back(self):
        if self.is_empty():
            return False
        else:
            return self.collection[self.tail - 1]

    # size() function returns the size of the array
    # takes O(n) time
    def size(self):
        return len(self.collection)

    # determines if the queue is empty, returns true if it is and
    # false if it isn't
    def is_empty(self):
        # checks if the length of the
       if len(self.collection) == 0 or self.head == self.tail:
           return True
       else:
           return False



