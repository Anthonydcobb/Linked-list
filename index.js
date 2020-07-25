
function LinkedList() {
  this.head = null; 
  this.tail = null;
  this.size = 0
  }

function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null)
  if (this.head) this.head.prev = newNode
  else this.tail = newNode   
  this.head = newNode
  this.size++
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail)
  if (this.tail) this.tail.next = newNode
  else this.head = newNode
  this.tail = newNode
  this.size++
  }

LinkedList.prototype.removeHead = function() {
  if(!this.head) return null
  const val = this.head.value
  this.head = this.head.next
  if (this.head) this.head.prev = null
  else this.tail = null
  this.size--
  return val
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null
  const val = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) this.tail.next = null
  else this.head = null
  this.size--
  return val
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

ll.addToHead("2nd")
ll.addToHead("1st")
ll.addToHead("4th")
ll.addToHead("3rd")


console.log(ll.indexOf("2nd"))
