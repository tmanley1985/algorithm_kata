class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = {}
    this.list = new DoublyLinkedList()
    this.size = 0
  }

  get(key) {
    if (!(key in this.map)) return -1

    const node = this.map[key]

    this.list.moveToFront(node)

    return node.value
  }

  put(key, value) {
    if (key in this.map) {
      const node = this.map[key]
      node.value = value

      this.moveToFront(node)
      return
    }

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
    this.head = new ListNode()
    this.tail = new ListNode()

    this.connectNodes(this.head, this.tail)
  }

  add(node) {
    // You have to do this connection first, because
    // you'll override this.head.next in the next line.
    this.connectNodes(node, this.head.next)
    this.connectNodes(this.head, node)
  }

  moveToFront(node) {
    this.delete(node)
    this.add(node)
  }

  delete(node) {
    // Think about it, you have a node like so:
    // previous <- current -> next
    // wouldn't it make sense to connect previous.next to next
    // and next.previous to previous? You're 'cutting out the middle man'.
    this.connectNodes(node.previous, node.next)
  }

  removeLast() {
    // You have to remember, that our actual tail is a dummy node
    // and we want to preserve that to prevent us from having to do
    // and out of bound checks.
    // So the "real" tail is always going to be right behind, the dummy.
    const tail = this.tail.previous
    this.delete(tail)
    return tail
  }

  connectNodes(nodeOne, nodeTwo) {
    nodeOne.next = nodeTwo
    nodeTwo.previous = nodeOne
  }
}

module.exports = {
  LRUCache,
}
