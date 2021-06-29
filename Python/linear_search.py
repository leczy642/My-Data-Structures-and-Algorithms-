"""
Linear search starts at the beginning and goes through all the elements in the list
until the target element is found
Runtime
Time Complexity : O(n)
Space complexity : O(1)
"""
# lst is an array of items
# target is the value we are looking for
def linear_search(lst, target):
    """
    Returns the index position of the target if found, else returns -1
    """
    for i in range(0, len(lst)):
        if(lst[i] == target):
            return i
    return -1

elements = [1,2,3,4,5,6,7]
targetElement = 6

print(linear_search(elements, targetElement))
