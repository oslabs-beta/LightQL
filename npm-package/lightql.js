// LRU Cache
function LRUCache(capacity, graphqlEndpoint) {
  this.capacity = capacity;
  this.map = new Map();
  this.dll = new DoublyLinkedList();
  this.graphqlEndpoint = graphqlEndpoint;
};

// Edge case handler to check if hashmap and dll are the same size:
LRUCache.prototype.equalSize = function() {
  // returns true if sizes are the same, false if not
  return this.map.size === this.dll.currCapacity;
};

LRUCache.prototype.get = function(key) {
  if (this.equalSize() === false) {
    console.log('Check hashmap and linked list');
    return;
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
    return "this is not in the cache";
}};
		
			// const gqlData = await response.json();

    //require in fetch and use the endpoint to send a fetch request to the graphql endpoint with the key "query"
    //store the returned data in our cache 
    

// we are either updating our node, or creating a new node:
LRUCache.prototype.put = function (key, value) {
  // if (this.equalSize() === false) {
  //   return console.log('Check hashmap and linked list');
  // }
//zero net change in capacity and just update 
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

DoublyLinkedList.prototype.remove = function (nodeToRemove) {
  let curr = this.head;
  console.log(curr)
  while (curr) {
    // check if curr node's val equal to val, if yes...
    if ((curr.value === nodeToRemove.value)) {
      // check if the head's val is equal to val, if yes, remove the head
      if (this.head.value === curr.value) {
        // check if there's only one node left
        if (this.tail.value === this.head.value) {
          this.head = this.tail = null;
          this.currCapacity--;
          return;
        }
        // if more than one node insde, and head'val equal to val
        this.head = curr.next;
        this.head.prev = null;
        this.currCapacity--;
        return;
      }
      // if tail's val equal to val, yes, remove the tail
      if (this.tail.value === curr.value) {
        this.tail = curr.prev;
        this.tail.next = null;
        this.currCapacity--;
        return;
      }
      // if the middle node's val equal to val
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
      this.currCapacity--;
      return;
    }
    curr = curr.next;
  }
 };


module.exports = { LRUCache, DoublyLinkedList, DLLNode};

// let newLink = new DoublyLinkedList();
// const node1 = new DLLNode(1, 'a');
// const node2 = new DLLNode(2, 'b');
// const node3 = new DLLNode(3, 'c')
// const node4 = new DLLNode(4, 'd');
// newLink.add(node1);
// console.log(newLink);
// newLink.add(node2);
// console.log(newLink);
// newLink.add(node3);
// console.log(newLink);
// newLink.add(node4);
// console.log(newLink);

// console.log("This is the remove part");
// newLink.remove(node4);
// console.log(newLink);
// newLink.remove(node1);
// console.log(newLink);
// newLink.remove(node2);
// console.log(newLink);
// newLink.remove(node3);
// console.log(newLink);




// function for removing nodes to the linked list
// DoublyLinkedList.prototype.remove = function (nodeToDelete) {
//   // use a boolean to keep track of whether the node exists and is found in the list
//   let found = false;
//   // check if list is empty; if it is, return
//   if (!this.head && !this.tail) {
//     return;
//     // if the nodeToDelete is the head or the tail, reassign found to true and delete the relevant node
//     //might be better to see if this this.head === this.tail to determine if we're using only a single node?
//   } else if (this.head === this.tail) {
//     this.head = null;
//     this.tail = null;
//     found = true;
//     //case where were deleting from the front and have >=2 nodes
//   } else if (this.head.value === nodeToDelete.value) {
//     this.head = this.head.next;
//     this.head.prev = null;
//     found = true;
//   } else if (this.tail.value === nodeToDelete.value) {
//     this.tail = this.tail.prev;
//     //this.tail.next = null;
//     found = true;
//     // if the nodeToDelete is not the head or the tail, traverse through the list to find the nodeToDelete
//   } else {
//     // declare a variable to keep track of the
//     let currNode = this.head;
//     while (currNode.next) {
//       if (currNode.value === nodeToDelete.value) {
//         currNode.prev.next = currNode.next;
//         currNode.next.prev = currNode.prev;
//         found = true;
//       }
//       currNode = currNode.next;
//     }
//   }

//   if (found === true) {
//     this.currCapacity -= 1;
//   }
//   return;
// };

//Official Test Code for Cache : DLL and Map working in tandem and current sizes are held

        // let lcache = new LRUCache(3);
        // console.log(lcache.capacity);
        // console.log(lcache.map.size);
        // console.log(lcache.dll.currCapacity);
        // console.log(lcache.equalSize());

        // lcache.put(1, 'a');
        // console.log(lcache.map.size);
        // console.log(lcache.dll.currCapacity);
        // console.log(lcache.get(1));

        // console.log(lcache)

        // lcache.put(2, 'b');
        // console.log(lcache.map.size);
        // console.log(lcache.get(2));
        // console.log(lcache);

        // lcache.put(3, 'c');
        // //  console.log(lcache.capacity);
        // //  console.log(lcache.map.size);
        // console.log(lcache);
        // console.log(lcache.get(1));
        // console.log(lcache.get(2));
        // console.log(lcache.get(3));

        // // console.log(lcache);
        // lcache.put(4, 'd');
        // console.log(lcache);
        // console.log(lcache.get(4));
        // console.log(lcache.map);
        // console.log(lcache.capacity);
        // console.log(lcache.map.size);
        // console.log(lcache.dll.currCapacity);

        // console.log(lcache.get(1));
        // console.log(lcache.get(2));
        // console.log(lcache.get(5));
        // console.log(lcache.get(3));
        // console.log(lcache.get(8));

        // lcache.put(4, 'e');
        // console.log(lcache.get(4));
        // console.log(lcache);
        // lcache.put(2, 'f');
        // console.log(lcache.get(1));
        // console.log(lcache.get(2));
        // console.log(lcache)

// Rhea's code for DLL Remove : Works with Values. Edited officially above to work with nodes

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

// Early iteration of the cache. get : Edited above for working version 
   //   // if the key exists in the map already, update the value of the node stored
  //   if (this.map.has(key)) {
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
  