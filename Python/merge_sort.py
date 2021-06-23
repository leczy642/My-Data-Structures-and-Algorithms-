"""
Merge_sort() takes a list as a parameter and returns a sorted list
Takes O(nlogn) run time
"""
# Let's define a recursive merge sort function. As usual, it takes the
# list or sub-list that we want it to sort.
def merge_sort(list):
    # setting a stop condition
    # if the lst is empty or has just one element, return the list (it's already sorted)
    # the stop condition also terminates the recursion
    if len(list) <= 1:
        return list

    # splitting the list
    middle_index = len(list) // 2
    # here we use the recursion to slice the array into 2 parts
    # left_values hold values from 0 to the mid-point
    # right_values hold values from
    left_values = merge_sort(list[:middle_index])
    right_values = merge_sort(list[middle_index:])

    # created an empty list to hold the sorted elements
    sorted_values = []

    left_index = 0
    right_index = 0

    # merging the lists
    while left_index < len(left_values) and right_index < len(left_values):
        # if the left side is smaller than the right side, then
        # place the left element on the list
        # increment left index
        if left_values[left_index] < right_values[right_index]:
            sorted_values.append(left_values[left_index])
            left_index += 1

            # else if the right is greater, then place
            # the right element on the list
            # increment right index
        else:
            sorted_values.append(right_values[right_index])
            right_index += 1

            # At this point there are still some elements on the
            # right and left side that are not yet included in the sorted list
            # copy both the right and left elements to the sorted list

            # copy the remaining elements on the left side to the sorted list
    while left_index < len(left_values):
        sorted_values.append(left_values[left_index])
        left_index += 1

        # copy the remaining elements on the right side to the sorted list
    while right_index < len(left_values):
        sorted_values.append(right_values[right_index])
        right_index += 1

    """
    The code below can be used to merged the two arrays 
    it's simpler and has less lines of code
    uncomment to test 
    sorted_values += left_values[left_index:]
    sorted_values += right_values[right_index:]
    """
    return sorted_values

arr = [2,3,5,1,7,6,8,9]

res = merge_sort(arr)
print(res)