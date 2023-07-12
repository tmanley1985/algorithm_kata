class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.list = new DoublyLinkedList()
    this.size = 0
    this.map = {}
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
      this.list.moveToFront(node)
      return
    }

    if (this.size === this.capacity) {
      const node = this.list.removeLast()
      delete this.map[node.key]
      this.size--
    }

    this.map[key] = new ListNode(key, value)
    this.list.add(this.map[key])
    this.size++
  }
}

class ListNode {
  constructor(key, value, previous = null, next = null) {
    this.key = key
    this.value = value
    this.previous = previous
    this.next = next
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new ListNode()
    this.tail = new ListNode()

    this.connectNodes(this.head, this.tail)
  }

  connectNodes(nodeOne, nodeTwo) {
    nodeOne.next = nodeTwo
    nodeTwo.previous = nodeOne
  }

  moveToFront(node) {
    this.delete(node)
    this.add(node)
  }

  delete(node) {
    this.connectNodes(node.previous, node.next)
  }

  add(node) {
    this.connectNodes(node, this.head.next)
    this.connectNodes(this.head, node)
  }
  removeLast() {
    const node = this.tail.previous
    this.delete(node)
    return node
  }
}

module.exports = {
  LRUCache,
}
