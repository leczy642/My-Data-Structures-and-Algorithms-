
def recursiveBinarySearch(lst, target, start=0, end=None):
    if len(lst) == 0 :
        return False

    if end is None :
        end = len(lst) - 1

    midpoint = (start + end)//2

    if lst[midpoint] == target :
        return midpoint
    else:
        if lst[midpoint] < target :
            recursiveBinarySearch(lst, target, midpoint + 1, end)

        else:
            recursiveBinarySearch(lst, target, start, midpoint - 1)



elements = [1,2,3,4,5,6,7]
targetElement = 6

print(recursiveBinarySearch(elements, targetElement))

