/*localForage is a fast and simple storage library for Javascript. localForage leverages asynchronous storage thorugh IndexedDB, a JS-based object-oriented database that runs in your browser, with a simple, localStorage-like API. LightQL leverages localForage and IndexedDB to persist cached data between sessions. Whenever you run a query through LightQL, the capacity, HashMap, Doubly-Linked List, and graphqlEndpoint are loaded into memory if available through the localForage method: localforage.setItem(). Additionally, before returning data to users, LighQL writes our cache data stuctures and graphqlEndpoint to our persistent memory in IndexedDB through the localForage method: localforage.getItem().
*/
const localforage = require("localforage");

//LRUCache function creates an instance of the LightQL cache. A capacity and graphQL endpoint are necessary arguments to pass in.
function LRUCache(capacity, graphqlEndpoint) {
  this.capacity = Math.floor(capacity);
  this.map = new Map();
  this.dll = new DoublyLinkedList();
  this.graphqlEndpoint = graphqlEndpoint;
}

// Edge case handler to check if hashmap and dll are the same size:
LRUCache.prototype.equalSize = function() {
  return this.map.size === this.dll.currCapacity;
};


//This function retrieves relevant data structures (this.map, this.dll, etc) stored in the IndexedDB browser storage and maps them with the corresponding structures in our LighQL cache solution using localForage.getItem()
LRUCache.prototype.getIDBCache = async function () {
  await localforage.getItem('LightQL', (err, value) => {
    if(err) {
      return false; 
    } else {
      if(!value) {
        return false;
      } 
      else {
        this.capacity = value.capacity;
        this.graphqlEndpoint = value.graphqlEndpoint;
        //When data structures (this.dll, this.map) are saved to IndexedDB the underlying methods that allow these structures to function are not saved in IndexDB. As a result, a new instance of each structure must be created and updated with the data from IndexedDB
        this.map = new Map();
        value.map.forEach((val, query) => {
          this.map.set(query, val);
        })
        this.dll = new DoublyLinkedList();
        let currNode = value.dll.head;
        while(currNode){
          this.dll.add(currNode);
          currNode = currNode.next;
        }
        return true;
      }
    }
  })
}


//A function to save the current LighQL cache data structures to IndexedDB using localforage.setItem()
LRUCache.prototype.saveIDBCache = async function (){
  let data = {
    capacity : this.capacity,
    map : this.map,
    dll : this.dll,
    graphqlEndpoint: this.graphqlEndpoint
  };
  await localforage.setItem('LightQL', data, (err, value) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
}

//A function that allows the user to request data for a specific graphQL query. It implements our Cache's LRU eviction policy and Lazy-Loading caching pattern
LRUCache.prototype.get = async function(query, variables) {
  //Writes LightQL Cache to IndexedDB
  await this.saveIDBCache();
  //If our Cache is not empty, pull relevant data structures stored in IndexedDB into our LightQL cache
  await this.getIDBCache();

  //Determines whether this.map and this.DLL have the same number of nodes and throws an error if not
  if (this.equalSize() === false) {
    throw new Error('Hashmap and linked list are out of sync and no longer have the same number of nodes');
  }
   //Checks if the grapQL endpoint is valid and throws an error if not
  if(!this.graphqlEndpoint){
    throw new Error('Graphql Endpoint Argument is invalid or missing')
  }
  //Checks capacity constraints : capacity must be an integer and greater than 0.
  if(this.capacity <= 0 || !this.capacity || typeof this.capacity !== 'number') {
    throw new Error('Capacity is invalid')
  }

/* LAZY LOADING IMPLEMENTATION
Lazy loading is a caching strategy that loads data into the cache only when necessary to improve performance and save system resources. 
When making a specific query, the application will hit the cache first; if the data for the query is present, the cache returns the data to your application. If the data is missing, then the cache will be responsible for pulling the data from the main database/data store. The returned data will then be written to the cache, and can quickly be retrieved the next time it's requested.
*/
  if (this.map.has(query)) {
    let currNode = this.map.get(query);
    this.dll.remove(currNode);
    this.dll.add(currNode);
    this.saveIDBCache();
    return currNode.value;
  } else {
    return new Promise ((resolve, reject) =>{
       fetch(this.graphqlEndpoint, {
				method: 'POST',
				headers: {'Content-type' : 'application/json',
					'Accept' : 'application/json',
			},
				body: JSON.stringify({
          query: query,
          variables : {variables}
        })
			})
			.then((res) => res.json())
			.then((data) => {
        const actualData = data.data;
        this.put(query, actualData);
        this.saveIDBCache();
        resolve(actualData);
			})
			.catch((err) => console.log(`Error in data fetch: ` + err));
		});
  }
};
		

//A function that stores new queries and associated data into our LRU Cache. It maintains consistency between our underlying HashMap structure and Doubly-Linked List
LRUCache.prototype.put = function (query, value) {
  if (this.equalSize() === false) {
    return console.log('Check hashmap and linked list');
  }
  if (this.map.has(query)) {
    //Get the current node from the list and save in a temp variable: currNode
    let currNode = this.map.get(query);
    //Delete the node from the Doubly-Linked list
    this.dll.remove(currNode);
    //Delete the node from the HashMap
    this.map.delete(query);
    //Update the currNode's value to reflect fresh data returned from the query
    currNode.value = value;
    //Add the node back to the DLL
    this.dll.add(currNode);
    //Add the node to the HashMap
    this.map.set(query, currNode);
    return;
  } else {
    // Case if the cache doesn't contain the requested Query
    // Case if the cache is at capacity: LRU Eviction is implemented here!
    if (this.map.size === this.capacity) {
      //Find the node at the tail of the DLL
      let tempTail = this.dll.tail;
      //Save the query from the tail DLL Node
      let tailToDeletequery = tempTail.query;
      //Delete the tail node from the DLL
      this.dll.remove(tempTail);
      //Remove the tail node from the HashMap
      this.map.delete(tailToDeletequery);
      //now we have free space in the HashMap and the DLL to add the new node
    }
    //Create a new node with the value and query passed in
    const newNode = new DLLNode(query, value);
    //Add the node to the DLL
    this.dll.add(newNode);
    //Add the node to the HashMap
    this.map.set(query, newNode);
    return;
  }
};
 
//Function to create a Doubly Linked-List node
const DLLNode = function (query, value) {
  this.query = query;
  this.value = value;
  this.next = null;
  this.prev = null;
};

//Function that creates a Doubly Linked-List
const DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.currCapacity = 0;
};

//Function for adding nodes to the Doubly Linked-List
DoublyLinkedList.prototype.add = function (node) {
  if (!this.head && !this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  this.currCapacity += 1;
  return;
};

//Function for removing nodes from the Doubly Linked-List
DoublyLinkedList.prototype.remove = function (nodeToRemove) {
  let curr = this.head;
  while (curr) {
    if ((curr.value === nodeToRemove.value)) {
      if (this.head.value === curr.value) {
        if (this.tail.value === this.head.value) {
          this.head = this.tail = null;
          this.currCapacity--;
          return;
        }
        this.head = curr.next;
        this.head.prev = null;
        this.currCapacity--;
        return;
      }
      if (this.tail.value === curr.value) {
        this.tail = curr.prev;
        this.tail.next = null;
        this.currCapacity--;
        return;
      }
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
      this.currCapacity--;
      return;
    }
    curr = curr.next;
  }
 };

 module.exports = { LRUCache, DoublyLinkedList, DLLNode};

