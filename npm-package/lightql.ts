/* 

// create get operation

// create put operation
*/


// implement LRU Cache

const LRUCache = function(capacity) {

    this.capacity = capacity;
    this.map = new Map();
    this.dll = new DoublyLinkedList();


    // function for moving values to the front during get or put


    // function for deleting items from the back during eviction
}

// Edge case handler to check if hashmap and dll are the same size
LRUCache.prototype.equalSize = function() {
   // updated the below conditional as it was causing tests to fail:
    return this.map.size === this.dll.currCapacity;
}

LRUCache.prototype.get = function(key) {
    if (this.equalSize() === false) {
        return console.log('Check hashmap and linked list')
    }
    if (this.map.has(key)) {
        // the 3 lines of code below are essentially making it the head (the most recently used):
        let currNode = this.map.get(key);
        this.dll.delete(currNode);
        this.dll.add(currNode);
        return currNode.value;
    } else {
        // PLACEHOLDER FOR CHECKING THE DATABASE
        return -1;
    }
}


// we are either updating our node, or creating a new node:
LRUCache.prototype.put = function (key, value) {
    if (this.equalSize() === false) {
        return console.log('Check hashmap and linked list')
    }
    // if the key exists in the map already, update the value of the node stored
    if (this.map.has(key)) {
        // the 3 lines of code below are the exact same as get: making it the head as it is the most recently used:
        let currNode = this.map.get(key);
        this.dll.delete(currNode);
        this.dll.add(currNode);
        // and here we are updating the value of that MRU node (because it's a put):
        currNode.value = value;
        // if it does not exist already, we are creating a new node to add to our list
    } else {
        // first, we will check if our cache has room to hold a new node by checking the value of the cache's capacity
        if (this.map.size === this.capacity) {
            let currNode = this.dll.tail;
            this.dll.delete(currNode);
            // edge case (add later): figure out how to make unique keys to each newNode
            let newNode = new DLLNode(key, value);
            this.map.set(key, newNode);
            this.dll.add(newNode);

        // WE FORGOT ABOUT: WHAT IF IT IS NOT AT CAPACITY **AND** THE KEY VALUE PAIR DOES NOT YET EXIST:

        

        // but we also need to return it after updating it?
        }
    }
}



// Doubly linked list node function
const DLLNode = function(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}

//function for double linked list

const DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.currCapacity = 0;
}



// function for adding nodes to the linked list
DoublyLinkedList.prototype.add = function(node) {
    // check if list is empty; if it is, reassign head and tail to the node passed in
    if (!this.head && !this.tail) {
        this.head = node;
        this.tail = node;
    } else {
       // if list has elements, place the pointers between the new node and the head 
       node.next = this.head; 
       this.head.prev = node;
       // reassign the head to the new node
       this.head = node;
    }
    // update capacity to account for new node
    this.currCapacity += 1;
}



// function for removing nodes to the linked list
DoublyLinkedList.prototype.delete = function(nodeToDelete) {
    // use a boolean to keep track of whether the node exists and is found in the list
    let found = false;
    // check if list is empty; if it is, return
    if (!this.head && !this.tail) {
        return;
    // if the nodeToDelete is the head or the tail, reassign found to true and delete the relevant node
    } else if (this.head.next === null) {
        this.head = null;
        this.tail = null;
        found = true;
    } else if (this.head.value === nodeToDelete.value) {
        this.head = this.head.next;
        found = true;
    } else if (this.tail.value === nodeToDelete.value) {
        this.tail = this.tail.prev;
        found = true;
    // if the nodeToDelete is not the head or the tail, traverse through the list to find the nodeToDelete
    } else {
        // declare a variable to keep track of the 
        let currNode = this.head;
        while (currNode.next) {
            if (currNode.value === nodeToDelete.value) {
                currNode.prev.next = currNode.next;
                currNode.next.prev = currNode.prev;
                found = true;
            }
            currNode = currNode.next;
        }  
    }
    
    if (found === true) {
        this.currCapacity -=1;
    }
    return;
}

let newLink = new DoublyLinkedList();
let lcache = new LRUCache(3);

// newLink.add(new DLLNode('value1', 1));
// newLink.add(new DLLNode('value2', 2));
// console.log(newLink)
// newLink.delete(new DLLNode('value2', 2))
// console.log(lcache.get(1));
// console.log(newLink)
// newLink.delete(new DLLNode('value', 1))
// console.log(newLink)

console.log(lcache.capacity);
console.log(lcache.equalSize());

console.log(lcache.put(1, 'a'));
console.log(lcache.put(2, 'b'));
console.log(lcache.get(5));
console.log(lcache.put(1, 'c'));
console.log(lcache.put(2, 'd'));
console.log(lcache.get(1));
console.log(lcache.get(2));
