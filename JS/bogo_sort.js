//helpful link to learn how to swap variables 
//https://dmitripavlutin.com/swap-variables-javascript/

/*bogoSort() takes an array, determines if the array is sorted 
and randomly shuffles the array untill it is completely sorted.
Time complexity : Takes O(n) time
Space complexity : Takes O(1) time
* */
function bogoSort(values){
    //while the list is not sorted
    while(isSorted(values) == false){
        //randomly shuffle the array 
        shuffle(values);
    }
    return values;
}

/* isSorted() takes an array and returns false if it is not sorted
or true if it is.
Run time is O(n)
* */
function isSorted(values){

 for(i = 0; i < values.length; i++){
     //if the current element is greater than the next element
     //return False
    if(values[i] > values[i+1]){
        return false;
    }
 }
 return true;
}

/*s shuffle() takes an array and shuffles the elements
Takes O(n) time
* */
function shuffle(values){
    for (var i = values.length - 1; i > 0; i--) { 
      
      //generate a random index from 1 to the length of the array
      var randomIndex = Math.floor(Math.random() * (i + 1));
     
     //shuffle the values between the random index and currentIndex
     //here we swap variable using a temporay variable called currenttIndex
     //currentIndex is a temporary variable
      var currentIndex = values[i];
      values[i] = values[randomIndex];
      values[randomIndex] = currentIndex;
    }
    return values;
  }
  

const arrayOfNumbers = [2, 5, 1, 3, 7, 4, 2, 3, 9, 8, 6, 3];
console.log(bogoSort(arrayOfNumbers));
console.log(isSorted(arrayOfNumbers));