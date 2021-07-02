# useful links
# https://www.geeksforgeeks.org/stack-in-python/
# https://dmitripavlutin.com/swap-variables-javascript/
# https://www.geeksforgeeks.org/stack-data-structure/?ref=ghm

"""
The following programme illustrates how to implement
a stack using an array
"""
# basic functions: push and pop
stack = []

# pushing an item into the stack
# this takes O(1) time
# pushing elements to the stack
stack.append(1)
stack.append(2)
stack.append(3)
stack.append(4)

"""
The code below is an implementation of a Stack using a array/list
Stack operations include: push(), pop(), peek()
"""
# retrieving the initial stack
print("Initial stack before popping :")
print(stack)
print("size of before popping :")
print(len(stack))

# removing an element from the stack
# takes O(1) time
# popping elements from the end of the stack
stack.pop()
stack.pop()

print("stack after popping :")
print(stack)
print("size of stack after popping :")
print(len(stack))

# return the element at the top of the stack
# this takes O(1) time
# retrieving the peek
# in an array the peek is the last element
peek = stack[-1]
print('The peak is : %s' %peek)