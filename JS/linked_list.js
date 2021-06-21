/**
 * useful links
 * https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
 */
/** 
    Node: An object for storing a single node in a linked list

    Attributes:
        data: Data stored in node
        next_node: Reference to next node in linked list
*/
function Node(data){
    this.data = data;
    this.nextNode = null;
}
/**
 * LinkedList:
 * Linear data structure that stores values in nodes. The list maintains a reference to the first node, also called head. Each node points to the next node in the list

    Attributes:
    head: The head node of the list
 */
function LinkedList(){
    this.head = null;

    /**
     * size: returns the number of nodes in the list
    it returns zero if empty else a number greater than zero
    Takes O(n) time 
     */
    this.size = function(){
        currentNode = this.head;
        count = 0;

        while(currentNode != null){
            count += 1;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    /** add: adds new node containing data at the head of the list
    takes O(1) time 
    */
    this.add = function(data){
        newNode = new Node(data);
        newNode.nextNode = this.head;
        this.head = newNode;    
    }

    /**
     * search: search for the first node containing data that matches the key
        Returns the node or `None` if not found
        Takes O(n) time
     */
    this.search = function(key){
        currentNode = this.head;

        while (currentNode != null){
            if(currentNode.data === key){
                return currentNode.data;
            }
            else{
                currentNode = currentNode.nextNode;
            }
        }

        return null;
    }
    /**
     * insert: inserts a new Node containing data at index position
        Insertion takes O(1) time but finding node at insertion point takes
        O(n) time.
        Takes overall O(n) time.
     */

        this.insert = function(data, index){
            if(index === 0){
                this.add(data);
            }
            if(index > 0){
                newNode = new Node(data);
                position = index;
                currentNode = this.head;

                while(position > 1){
                    currentNode = newNode.nextNode;
                    position -= 1; 
                }
                //grab the previous and next nodes 
                prevNode = currentNode;
                nextNode = currentNode.nextNode;
                
                //insert the newNode between previous and next
                prevNode.nextNode = newNode;
                newNode.nextNode = nextNode;
            }
        }

        /**
         *  Removes Node at specified index
            Takes O(n) time
         */
        this.removeAt = function(index){
            var size_of_list = this.size();

            if (index < 0 || index >= this.size_of_list)
            return ("Please Enter a valid index");
        else {
            var currentNode = this.head;
            var prevNode = currentNode;
            var position = 0;
 
            // deleting first element
            if (index === 0) {
                this.head = currentNode.nextNode;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (position < index) {
                    position++;
                    prevNode = currentNode;
                    currentNode = curr.nextNode;
                }
 
                // remove the element
                prevNode.nextNode = currentNode.nextNode;
            }
            size_of_list -= 1;
 
            // return the remove element
            return currentNode.data;
            }
        }
        /**
         * This returns the element at a particular index
         * Takes 0(n) time
         */
        this.elementAt = function(index) {
            var currentNode = this.head;
            var position = 0;

            while(position < index){
                currentNode = currentNode.nextNode;
                position += 1;
            }
            return currentNode.data;
          }

          // prints the list items
        this.printList = function() {
            var currentNode = this.head;
            var str = "";
            while (currentNode) {
                str += currentNode.data + " ";
                currentNode = currentNode.nextNode;
            }
            return (str);
        }
    
}
l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
l.add(6);
//l.insert(3,1);  
//l.removeAt(0);
//console.log(l.size());
console.log(l.search(1));
//console.log(l.viewList());
console.log(l.elementAt(1));
console.log(l.removeAt(0));
console.log(l.head);
console.log(l.printList());

/*n1 = new Node(1);
n2 = new Node(2)
l = new LinkedList();
l.head = n1;
list_size = l.size();
console.log(list_size);*/

