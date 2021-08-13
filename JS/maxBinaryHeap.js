class MaxBinaryHeap{

    constructor(){
        //we are initializing an array
        this.values = [];
    }
    insert(element){
        //part1 
        //push the element to the end of the array 
        this.values.push(element);
        //get the index of the last element
        let index = this.values.length - 1;

        //part2
        //compares the element pushed with with it's parent element
        //if the element is greater than the parent element, it 
        //would swap positions with it's parent element
        //when
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            let parentElement = this.values[parentIndex];
            
            //if the element is less than or equal to it's parent element
            //stop the loop
            //else swap the values
            if(element <= parentElement){
                break;
            }else{
               //swap the element at the parent index with the new element
               this.values[parentIndex] = element;
               //swap the value at the last index with the parent element
               this.values[index] = parentElement;
               //we reset the index to the value of the parent element
               index = parentIndex;
            }
        }

    } 
   //deleting the parentNode
   //in a MaxHeap this is the largest node     
  extractMax(){
      //get the first element
      const max = this.values[0];

      //pop the last element in the array
      //and use it to replace the element at the beginning
      const last = this.values.pop();
      
      if(this.values.length > 0){
        this.values[0] = last;

        //compare the new max
        //if it is less than the right or left
        //sink it down until it appears where it is neighther
        //less than the right or left
        this.sinkDown();
      }
      return max;

  }
  //The sinkDown() function is an internal function
  sinkDown(){
      //start at index 0;
      //grab the length of the array
      //and get the first element
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];
      
      //the loop starts with a true condition
      //a false value will be set after a certain condition 
      //to stop the loop
      while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild,rightChild;
            let swap = null;

            //check to make sure the leftside doesn't go out of
            //bounds..
            if(leftChildIndex < length){
              //set the value of the left child
              leftChild = this.values[leftChildIndex];
              
              //if the value of the left child is
              //greater than the element
              //set the value of swap to leftChildIndex
              if(leftChild > element){
                swap = leftChildIndex;
              }

            }
            //check to make sure the rightside doesn't go out of
            //bounds..
            if(rightChildIndex < length){
              //set the value of the right child
              rightChild = this.values[rightChildIndex];

              //if the value of the right child is
              //greater than the element
              //set the value of the swap to the rightChildIndex
              if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                swap = rightChildIndex
              }

            }//if swap is not break
            //else swap the values
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;


      }
  }
}
//const arr = [41,39,33,18,27,12];
//const arr =  [55, 39, 41, 18, 27, 12, 33];
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(45);
//heap.insert(45);
//[41,39,33,18,27,12]
//attempting to add 55
//arr[2]
//arr[6]