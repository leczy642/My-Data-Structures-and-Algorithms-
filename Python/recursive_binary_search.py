# lst is an array of items
# target is the value we are looking for
# start is the starting index
# end is the ending index
def recursiveBinarySearch(lst, target, start=0, end=None):

    # midpoint = (start + end)//2

    # if the array is empty or the element is not in the array
    if len(lst) == 0 or start > end:
        return False

    if end is None :
        end = len(lst) - 1

    midpoint = (start + end)//2

    if lst[midpoint] == target :
        return midpoint
    else:
        if lst[midpoint] < target :
           return recursiveBinarySearch(lst, target, midpoint + 1, end)

        else:
            return recursiveBinarySearch(lst, target, start, midpoint - 1)



elements = [1,2,3,4,5,6,7]
targetElement = 10

print(recursiveBinarySearch(elements, targetElement))

