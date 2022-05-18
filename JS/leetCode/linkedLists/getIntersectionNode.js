//Method2 (Summary)
//Time O(n + m) || Space O(1)
//calculating the difference in size between headA and headB
//procedure
//find the difference between the length of headA and headB
//start either headA or headB at that difference
//compare the current node at headA and headB, if they are 
//the same, return that node
//return null if no intersection is found.
var getIntersectionNode = function(headA, headB) {
    let [currA, currB] = [headA, headB];
    let difference = 0
    let currLongest = null;
    let currShortest = null;
    
    let [lenA,lenB] = [0,0];
    
    
    //find the length of currA and currB
    while(currA != null){
        lenA += 1;
        currA = currA.next;
    }
    while(currB != null){
        lenB += 1;
         currB = currB.next;
    }
   
    //get the longest node
    if(lenA > lenB){
       difference = lenA - lenB;
       currLongest = headA;
       currShortest = headB;
       }else {
            difference = lenB - lenA;
            currLongest = headB;
            currShortest = headA;
       }
    
    //skip the currLongest by the difference
    let i = 0;
    while(i < difference){
        currLongest = currLongest.next  
         i += 1;
    }
    
    //traverse the currLongest and shortest together and compare their current nodes
    //if they are the same, it means we have found the intersection
    //then we we return it
    
    while(currLongest !== null || currShortest !== null){
        if(currLongest == currShortest){
            return currLongest;
        }
        currLongest = currLongest.next;
        currShortest = currShortest.next;
    }
    return null;
};
//Method 1
//using a set
// Time O(n + m) | Space O(n)
// note the first index in a linked starts at 1 not 0 -> not sure but need to confirm this
//summary
//push all the nodes in headA into a set
//compare all the nodes in the set to all the elements headB
//where a node in headA is equal to a node in the set
//return that node
//return null when no matching nodes are found.
// var getIntersectionNode = function(headA, headB) {
//     const visited = new Set();
//     // Set(5) { [4,1,8,4,5], [1,8,4,5], [8,4,5], [4,5], [5] }
//    //  headB = [5,6,1,8,4,5]
//      while(headA != null){
//         visited.add(headA);
//         headA = headA.next;
//     }
//     // console.log(visited)
//     // console.log(headB)
//     while(headB != null){
//         if(visited.has(headB)){
//             return headB;
//         }
//         headB = headB.next;
//     }
//     return null;
// };
