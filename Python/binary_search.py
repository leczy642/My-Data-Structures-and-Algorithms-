"""
Binary search locates the position of an element in a sorted array
by repeatedly dividing in half the portion of the list that can contain the item, until
it has narrowed down the position to just one.
Time Complexity : O(Logn)
Space Complexity : O(1)
"""
# lst is an array of items
# target is the value we are looking for

def binarySearch(lst, target):
    first = 0;
    last  = len(lst) - 1;

    while first <= last :
        # // symbol divides to the nearest whole number
        midpoint = (first + last)//2
        if lst[midpoint] == target :
            return midpoint
        elif lst[midpoint] < target :
            first = midpoint + 1
        else:
            last = midpoint - 1

    return -1



elements = [1,2,3,4,5,6,7]
targetElement = 6

print(binarySearch(elements, targetElement))
