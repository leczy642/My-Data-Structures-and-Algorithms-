class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    //adding a vertex
    addVertex(vertex){
        //if the vertex doesn't exist in the adjacency list, add the vertex
       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    //adding edges
    //this creates a connection between nodes/vertexs
    addEdge(v1,v2){
        //push the second vertex into the adjecency list of the first vertex
        this.adjacencyList[v1].push(v2);
        //push the first vertex into the adjacency list of the second vertex
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeEdge2(v1,v2){
        this.adjacencyList[v1].pop(v2);
        this.adjacencyList[v2].pop(v1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete adjacencyList[vertex];
    }

    depthFirstIterative(start){
        //initialize the stack, result, visited and currentVetex
        const stack = [start]; //holds the currentVertex
        const result = []; //holds the all nodes visited
        const visited = {}; //
        let currentVertex;

        //mark the starting vertex as visited
        visited[start] = true;
        //if the length of the stack is greater than zero
        while(stack.length){
            //remove the last element from the back of the queue
            currentVertex = stack.pop();
            //push the removed element into the result array
            result.push(currentVertex); 

            //get the neighbors of the current vertex of each element of the adjacency list
            this.adjacencyList[currentVertex].forEach(neighbor => {
                //if it's neighbor has not been visited
                if(!visited[neighbor]){
                    //mark it as visited
                    visited[neighbor] = true;
                    //push the visited neighbour into the stack
                    stack.push(neighbor);
                }
            });

            
        }
        //return the results
        return result
    }

    breathFirst(start){
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex;

        //mark the starting vertex as visted
        visited[start] = true;
        //while the queue has a length greater than zero
        while(queue.length){
            //remove the first element from the front of the queue
            currentVertex = queue.shift();
            //push that element into the results array
            result.push(currentVertex);

            //get the neighbors of the current vertex of each element on the adjacency list
            this.adjacencyList[currentVertex].forEach(neighbor =>{
                //if the neighbor has not been visted
                if(!visited[neighbor]){
                    //mark as visited
                    visited[neighbor] = true;
                    //push the visted neighbor into the queue
                    queue.push(neighbor);
                }
            });
        }
        //return the result
        return result;
    }
}
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")



g.addEdge("A", "B")
g.addEdge("A", "C")



//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log("-- Adjacency List --")
console.log(g.adjacencyList)
console.log("-- Adjacency List of Current --")
console.log(g.adjacencyList["A"]);
console.log("--depth First Iteration --")
console.log(g.depthFirstIterative("A"));
console.log("--breath First Iteration --")
console.log(g.breathFirst("A"));

