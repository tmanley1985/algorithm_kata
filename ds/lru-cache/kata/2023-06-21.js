class LRUCache {
  constructor(capacity) {
    // init hash table, linked list, save capacity, size

    // This will store a reference to the node!
    this.map = {}
    this.list = new DoublyLinkedList()
    this.capacity = capacity
    this.size = 0
  }

  get(key) {
    // If key doesn't exist, return -1
    if (!(key in this.map)) return -1

    // If it does, move it to front of linked list
    // return value
    const node = this.map[key]
    this.list.moveToFront(node)
    return node.value
  }

  put(key, value) {
    // if key exists, edit value, move value to the front
    // if at capacity, remove last node from linked list
    // decrement size

    if (key in this.map) {
      const node = this.map[key]
      node.value = value
      this.list.moveToFront(node)
      return
    }

    // if not at capacity
    // add to linked list
    // save key,value to hashmap

    if (this.size === this.capacity) {
      const lastNode = this.list.removeLast()
      delete this.map[lastNode.key]
      this.size--
    }

    const newNode = new ListNode(key, value)
    this.list.add(newNode)
    this.map[key] = newNode
    this.size++
  }
}

class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor() {
    // We can initialize this to dummy nodes
    // to get around edge cases.
    this.head = new ListNode()
    this.tail = new ListNode()

    this.connectNodes(this.head, this.tail)
  }

  // This will add to the beginning of the linked list
  add(node) {
    this.connectNodes(node, this.head.next)
    this.connectNodes(this.head, node)
  }

  // This will take a node already in the linked list, delete it and re-add it to the front.
  moveToFront(node) {
    this.delete(node)
    this.add(node)
  }

  removeLast() {
    // This should return the last node

    // Remember that last node is going to be a dummy node, so the real tail here is the previous node!
    const lastNode = this.tail.previous
    this.delete(lastNode)
    return lastNode
  }

  connectNodes(nodeOne, nodeTwo) {
    nodeOne.next = nodeTwo
    nodeTwo.previous = nodeOne
  }

  delete(node) {
    // Think about it. If you're connecting the node's previous and next nodes together,
    // it's like you're removing the guy in the middle - the node itself!
    this.connectNodes(node.previous, node.next)
  }
}

module.exports = {
  LRUCache,
}
