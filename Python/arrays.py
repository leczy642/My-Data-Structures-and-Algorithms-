# this program illustrates basic array operations in python

numbers = [1,2,3,4,5,6,7]

# accessing the first element
firstElement = numbers[0]

# using an index out of bounds
# uncomment to test
# outOfBounds = numbers[20]

# retrieving the length of the list
len(numbers)

# iterating over a list
# uncomment to test
# for i in (range(len(numbers))):
#    print (numbers[i])



# list operations add, append, remove, insert, extend
# append, adding an element to an array
numbers.append(8)

# extend, joining two arrays together
numbers.extend([10, 11, 12])
# recursive_binary_search.py

# insert an item at a given index
# insert(index, element)
numbers.insert(10, 14)

# remove takes a value as parameter and deletes the first element in the list that matches the argument
numbers.remove(14)

# print(numbers)

# searching for the position of an element using index
numbers.index(2)

# searching for elements using in and not in operators
if 5 in numbers :
    print(True)

if 20 not in numbers :
    print (True)
