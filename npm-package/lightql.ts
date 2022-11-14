/* 

// create get operation

// create put operation
*/

// implement LRU Cache

const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.dll = new DoublyLinkedList();

  // function for moving values to the front during get or put

  // function for deleting items from the back during eviction
};

// Edge case handler to check if hashmap and dll are the same size
LRUCache.prototype.equalSize = function () {
  // updated the below conditional as it was causing tests to fail:
  return this.map.size === this.dll.currCapacity;
};

LRUCache.prototype.get = function (key) {
  if (this.equalSize() === false) {
    console.log('Check hashmap and linked list');
  }
  if (this.map.has(key)) {
    // the 3 lines of code below are essentially making it the head (the most recently used):
    let currNode = this.map.get(key);
    console.log(currNode);
    // remove dll from the origin place, add to head
    this.dll.remove(currNode);
    this.dll.add(currNode);
    return currNode.value;
  } else {
    // PLACEHOLDER FOR CHECKING THE DATABASE
    return 'this is not in the database';
  }
};

// we are either updating our node, or creating a new node:
LRUCache.prototype.put = function (key, value) {
  // if (this.equalSize() === false) {
  //   return console.log('Check hashmap and linked list');
  // }

  if (this.map.has(key)) {
    //key does exist so we do an update
    //get the current node from the list and save in a temp variable
    let currNode = this.map.get(key);
    //then we need to delete the node from the linked list
    this.dll.remove(currNode);
    //delete the node from the hash map
    this.map.delete(key);
    //update the value to the new value passed in
    currNode.value = value;
    //add the node to the list
    this.dll.add(currNode);
    //add the node to hash map
    this.map.set(key, currNode);
    //return out and end logic statement
    return;
  } else {
    // write to the cache as the key doesn't exist
    // if at capacity:
    if (this.map.size === this.capacity) {
      //find the node at the tail of the DLL
      let tempTail = this.dll.tail;
      //save the key from the tail DLL Node
      let tailToDeleteKey = tempTail.key;
      //delete the tail node
      this.dll.remove(tempTail);
      //remove the tail node from the hash map
      this.map.delete(tailToDeleteKey);
      //now we have free space in the hash map and the DLL to add the new node
    }
    //We always do the below in both cases and dont worry about 66-70 if were not at capacity
    //we create a new node with the value and key passed in
    const newNode = new DLLNode(key, value);
    //add the node to the DLL
    this.dll.add(newNode);
    //add the node to the hashmap
    this.map.set(key, newNode);
    return;
  }

  //   // if the key exists in the map already, update the value of the node stored
  //   if (this.map.has(key)) {
  //     // Rhea--- maybe we can use (this.get(key))???
  //     // the 3 lines of code below are the exact same as get: making it the head as it is the most recently used:
  //     let currNode = this.map.get(key);
  //     this.dll.delete(currNode);
  //     this.dll.add(currNode);
  //     // and here we are updating the value of that MRU node (because it's a put):
  //     currNode.value = value;
  //     // if it does not exist already, we are creating a new node to add to our list
  //     // don't forget to exit:
  //     return;
  //   }
  //   // WE FORGOT ABOUT: WHAT IF IT IS NOT AT CAPACITY **AND** THE KEY VALUE PAIR DOES NOT YET EXIST:
  //   if (!this.map.has(key) && this.map.size <= this.capacity) {
  //     let newNode = new DLLNode(key, value);
  //     this.map.set(key, newNode);
  //     this.dll.add(newNode);
  //   }
  //   // IF IT DOES NOT EXIST BUT WE ARE AT CAPACITY
  //   if (this.map.size + 1 === this.capacity) {
  //     // first, we will check if our cache has no room to hold a new node, then we remove the tail (LRU) and add put key value to head (MRU)
  //     let currNode = this.dll.tail;
  //     //console.log(currNode)
  //     this.dll.delete(currNode);
  //     // edge case (add later): figure out how to make unique keys to each newNode
  //     let newNode = new DLLNode(key, value);
  //     this.map.set(key, newNode);
  //     this.dll.add(newNode);
  //   }
  //   // but we also need to return it after updating it?
};

// Doubly linked list node function
const DLLNode = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
};

//function for double linked list

const DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.currCapacity = 0;
};

// function for adding nodes to the linked list
DoublyLinkedList.prototype.add = function (node) {
  // check if list is empty; if it is, reassign head and tail to the node passed in
  if (!this.head && !this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    //this.head and this.tail are both not empty
    // if list has elements, place the pointers between the new node and the head
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  // update capacity to account for new node
  this.currCapacity += 1;
  return;
};

// function for removing nodes to the linked list
DoublyLinkedList.prototype.remove = function (nodeToDelete) {
  // use a boolean to keep track of whether the node exists and is found in the list
  let found = false;
  // check if list is empty; if it is, return
  if (!this.head && !this.tail) {
    return;
    // if the nodeToDelete is the head or the tail, reassign found to true and delete the relevant node
    //might be better to see if this this.head === this.tail to determine if we're using only a single node?
  } else if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    found = true;
    //case where were deleting from the front and have >=2 nodes
  } else if (this.head.value === nodeToDelete.value) {
    this.head = this.head.next;
    this.head.prev = null;
    found = true;
  } else if (this.tail.value === nodeToDelete.value) {
    this.tail = this.tail.prev;
    //this.tail.next = null;
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
    this.currCapacity -= 1;
  }
  return;
};

//let newLink = new DoublyLinkedList();
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
console.log(lcache.map.size);
console.log(lcache.equalSize());

lcache.put(1, 'a');
console.log(lcache.map.size);
console.log(lcache.get(1));

//console.log(lcache)

lcache.put(2, 'b');
console.log(lcache.map.size);
//console.log(lcache.get(2));
console.log(lcache);

lcache.put(3, 'c');
//  console.log(lcache.capacity);
//  console.log(lcache.map.size);
//  console.log(lcache.get(1));
//  console.log(lcache.get(2));
console.log(lcache.get(3));

// // console.log(lcache);
lcache.put(4, 'd');
console.log(lcache.get(4));
console.log(lcache.map);
console.log(lcache.capacity);
console.log(lcache.map.size);
console.log(lcache.dll.currCapacity);

console.log(lcache.get(1));
console.log(lcache.get(2));
console.log(lcache.get(5));

lcache.put(1, 'e');
console.log(lcache.get(1));
lcache.put(2, 'f');

//console.log(lcache.get(1));
// console.log(lcache.get(2));

// Rhea's code...

// const DoublyLinkedList = function () {
//   this.head = null;
//   this.tail = null;
//   this.size = 0;
//   // new node instance inside add/remove function
// };

// const Node = function (key, val) {
//   this.key = key;
//   this.val = val;
//   this.next = null;
//   this.prev = null;
// };

// DoublyLinkedList.prototype.add = function (val) {
//   let newNode = new Node(val);
//   // check if head is existed, if no, set head and tail to newNode
//   if (!this.head) {
//     this.head = this.tail = newNode;
//     this.size++;
//     return;
//   } else {
//     // if head exists, set the newNode as new head
//     this.head.prev = newNode;
//     newNode.next = this.head;
//     this.head = newNode;
//     this.size++;
//     return;
//   }
// };

// let newLink = new DoublyLinkedList();
// newLink.add('a');
// console.log(newLink.size);
// newLink.add('b');
// console.log(newLink.size);
// newLink.add('c');
// console.log(newLink.size);
// newLink.add('d');
// console.log(newLink.size);
// console.log(newLink);

// DoublyLinkedList.prototype.remove = function (val) {
//   let curr = this.head;
//   while (curr) {
//     // check if curr node's val equal to val, if yes...
//     if (curr.val === val) {
//       // check if the head's val is equal to val, if yes, remove the head
//       if (this.head.val === curr.val) {
//         // check if there's only one node left
//         if (this.tail.val === this.head.val) {
//           this.head.val = this.tail.val = null;
//           this.size--;
//           return;
//         }
//         // if more than one node insde, and head'val equal to val
//         this.head = curr.next;
//         this.head.prev = null;
//         this.size--;
//         return;
//       }
//       // if tail's val equal to val, yes, remove the tail
//       if (this.tail.val === val) {
//         this.tail = curr.prev;
//         this.tail.next = null;
//         this.size--;
//         return;
//       }
//       // if the middle node's val equal to val
//       curr.prev.next = curr.next;
//       curr.next.prev = curr.prev;
//       this.size--;
//       return;
//     }
//     curr = curr.next;
//   }
// };
// newLink.remove('d');
// console.log(newLink);
// newLink.remove('a');
// console.log(newLink);
// newLink.remove('b');
// console.log(newLink);
// newLink.remove('c');
// console.log(newLink);
