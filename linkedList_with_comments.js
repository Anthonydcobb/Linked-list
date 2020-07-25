// A linked list needs.  a head pointer,  to point at the node in the front of the list and a tail pointer to point at the last node in the list


function LinkedList() {
  this.head = null; // it is important to have the set to null
  this.tail = null;
  this.size = 0
  }

// it also needs nodes.  a constructor function that creates nodes.  nodes need a value and pointers also.  to point at the next, previous nodes.  singly liked only have one pointer


function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// adding a function to the LinkedList prototype that adds a node to the head of the list

LinkedList.prototype.addToHead = function(value) {
  // create new node / new head
  let newNode = new Node(value, this.head, null)
  // if there is a head node already we are gonna assign the new node to the original heads previous and then make the new node the new head
  if (this.head) this.head.prev = newNode
  //if the head node is currently null then that also means there is no tail.  so we are gonna make the new node the tail
  else this.tail = newNode   
  // now that we are outside the loop.  we do what this whole function is about and make the new node the new head!!!
  this.head = newNode
  this.size++
}

LinkedList.prototype.addToTail = function(value) {
  // create the new node
  let newNode = new Node(value, null, this.tail)
  //check if the list has anything in it. if not make this head and tail
  if (this.tail) this.tail.next = newNode
  else this.head = newNode
  this.tail = newNode
  this.size++
  }

LinkedList.prototype.removeHead = function() {
  // ok so first if there is not a head  then just retrun null
  if(!this.head) return null
  //get the value of the head cause we want to return it
  const val = this.head.value
  // now if there is a head first move the head pointer to the next node
  this.head = this.head.next
  // here is were i had trouble.  now if the new head exists and is not null,  we need to make the heads prev element null.  because the head should not have a prev only a next
  if (this.head) this.head.prev = null
  // and if the head element became null.  that means there is nothing in the list and the tail should also be null
  else this.tail = null
  return val
  this.size--
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null
  const val = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) this.tail.next = null
  else this.head = null
  return val
  this.size--
}

LinkedList.prototype.search = function(value) {
  let pointer = this.head
  while (pointer) {
  if (pointer.value == value) return pointer.value
    pointer = pointer.next 
  }
  return null 
}

LinkedList.prototype.indexOf = function(value) {
  let pointer = this.head
  let arr = []
  for (let i = 0; i < this.size; i++) {
    if (pointer.value === value) {
      arr.push(i)
      pointer = pointer.next
    } else {
      pointer = pointer.next
    }
  }
  return arr
}





const ll = new LinkedList()

ll.addToHead("1st")
ll.addToHead("2st")
ll.addToHead("3st")
ll.addToTail("NEW TAIL")


console.log(ll.search("3st"))
