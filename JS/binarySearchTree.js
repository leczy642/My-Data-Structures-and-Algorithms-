class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    
   insert(value){
       //initialize a new Node
        var newNode = new Node(value);
        //if the root node is empty
        if(this.root === null){
            //set the value of the new Node to the root
            this.root = newNode;
            return this;
        }
        //set the current. which is the root node at first
        let current = this.root;
        //while the current is not null
        while(current){
            //if the value entered is the same as the current node
            //which means it has already been added
            if(value === current.value) return undefined;
            //if the value enetered is less than the current node
            //it should go to the left
            if(value < current.value){
                //check if the left node is null
                if(current.left === null){
                    //if it is then set the value of the to the newNode added
                    current.left = newNode;
                    return this;
                }
                //set the left as the current node
                current = current.left;
                //else if the value is greater than current value
            } else {
                //check if the right node is null
                if(current.right === null){
                    //set the value of the right node to the new Node
                    current.right = newNode;
                    return this;
                } 
                //set the current node as the right node
                current = current.right;
            }
        }
   }
    
   /**This function searches for a value in the Binary Search Tree
   it returns the node if it exists
   and false if it doesn't exist. 
   */
   find(value){
        //set the root node as the current
        //set found to be false initially
        var current = this.root;
        var found = false;
       //if the root node is empty return false;
       if(this.root === null) return false;
       
       //while the current node exists
       //and found is false. 
       while(current && !found){
         //if the value is less than the current
         //move to the left
          if(value < current.value){
            current = current.left;
          }
          //else if value is greater than the current
          //move to the right
          else if (value > current.value){
            current = current.right;
          }
          //if the value is equal to current
          //which means it's found
          else{
              //set found to true so we can terminate the loop
              found = true;
          }
       }
       //if the value cannot be found return false
       if(!found) return false;
       //return the current if it exists
       return current;

   }
   
   /**checks the Binary Search tree to see if it contains a certain value
   return true if it does
   and return false if it doesn't 
   */
   contains(value){
        //set the root node as the current
        //set found to be false initially
        var current = this.root;
        var found = false;
       //if the root node is empty return false;
       if(this.root === null) return false;
       
       //while the current node exists
       //and found is false. 
       while(current && !found){
         //if the value is less than the current
         //move to the left
          if(value < current.value){
            current = current.left;
          }
          //else if value is greater than the current
          //move to the right
          else if (value > current.value){
            current = current.right;
          }
          //if the value is equal to current
          //which means it's found
          else{
              //return true so we can terminate the loop
              return true;
          }
       }
       //if the value cannot be found return false
       return false;
    
   }
   /*The breadthFirstFunction Traverses the neighbors
   //before visiting the child nodes
   //returns an array of the elements visited
   Takes O(n) time
   */
   breathFirstSearch(){
    //initialize empty variables for data and the queue
    let data = [];
    let queue = [];
    let node = this.root;

    //store the root node in the queue
    queue.push(this.root);
    
    //while there is an element in the queue
    //or while the length of the queue is greater than zero
    while(queue.length){
        //remove an element from the beginning of the queue
        //always remove the first element
         node = queue.shift();
        //push that element into the data array
        data.push(node.value);
        //if the node has a right node
        //push that node into the queue
        if(node.left) queue.push(node.left);
        //if it has a left node push that node into the queue 
        //as well
        if(node.right) queue.push(node.right);

        }
        //return the data
        return data;
    }

    depthFirstPreOrder(){  
        //inititialize empty variables for data and the stack
        let data = [];
        let stack = [];
    
        //initialize the root node
        let node = this.root;
        //node starts with the value of the root node
        
        //if the tree is empty, i.e no root node
        //return an empty array
        if(!node) return [];
    
        //push the root node into the stack
        stack.push(this.root);
        
        //while the stack has a length greater than zero
        while(stack.length){
            //remove an item from the end of the stack
            node = stack.pop();
            
            //push the eleemnt into the data array
            data.push(node.value);
        
        //if a node(parent) has a right node push the node into the stack
        if(node.right) stack.push(node.right);
        //if a node(parent) has a left node push the node into the stack
        if(node.left) stack.push(node.left);
           
        }
        //return all the items traversed
        return data;
       }

       depthFirstPostOrder(){
        //inititialize empty variables for data and the stack
        let data = [];
        let stack = [];
        
        //initialize the root node
        let node = this.root;
        
        //if the tree is empty, i.e no root node
        //return an empty array
        if(!node) return [];
        
        //push the root node into the stack
        stack.push(this.root);
        
        //while the stack has a length greater than zero
        while(stack.length){
            //remove an item from the end of the stack
            node = stack.pop();
            
            //if a node(parent) has a right node push the node into the stack
            if(node.left) stack.push(node.left);
            //if a node(parent) has a left node push the node into the stack
            if(node.right) stack.push(node.right);
           
            
            //push the elements into the data array
            data.push(node.value);
 
        }
        //the reverse of the array gives the post order value
         return data.reverse();
    }

    depthFirstInOrder(){ 
        var current = this.root;//the root node is the current node
        var stack = [];
        var result = [];
         
         //while the stack is not empty or the current node is not null
          while(stack.length ||  current != null){
              //if the current node is not null
              if(current != null){
                  //push the current node into the stack
                 stack.push(current);
                 //set the current node to the left node
                 current = current.left;
              }//else
              else{//remove the current node from the stack
                  current = stack.pop();
                  //push the current value into the results array
                  result.push(current.value);
                  //set the current node to the right 
                  current = current.right;
              }
          }
          //return the result  
          return result;  
     }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.depthFirstPostOrder());
/**tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);**/
/**
                    10
                   /  \
                 6     15
                /  \    \
               3    8    20
**/
