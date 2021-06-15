## JavaScript Data Structures And Algorthms
1. An algorithm must return a value
2. It must run in a finite amount of time
3. Must output the same result everytime for a given input 

## Correctness and efficiency 
Algorithms can be defined by correctness and efficiency   

### Efficiency 
Time complexity - how long it will take an alogorithm to run  
Space complexity - The amount of memory used up by an algorithm 

Linear Search
Binary Search

## Big O
This is the theoretical definition if an algorithm as a function of its size. Big O measures complexity as the input size grows.

O - means order of magntude of complexity 
O(n)

## Complexities 
Linear search is O(n) - linear time 
Binary search is O(log n) - Logarithmic time 

### Quadratic time 
Loop in a loop is O(n^2)  

### Cubic time 
Three nested loops O(n^3) - Cubic time

### Quasilinear complexity
The worst case   O(n log n)

### exponential complexity
O(k^n)
k is the total number of characters available for the numbers, alphabets and digits
n is the power i.e the number of characters set
eg. 
the number if tries of a 1 digit password with numbers 1-10 is
10^1 = 2
2 character password will have
10^3
the number of tries for a password containing letters a-z with a single character password is 
26^1 = 26 tries 
for 2 characters will be
26^2 = 676 tries 

with charaters and digits = 26+10
for a 10 character password with numbers and digits, the number of tries will be 
36^10 = 3.6561584E15


The most ideal case of complexity of an algorithm is **O(1)**   known as constant time

## Recursion 
A recursive function is one that calls itself 