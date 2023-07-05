class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.size = 0
    this.list = new DoublyLinkedList()
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
      const last = this.list.removeLast()
      delete this.map[last.key]
      this.size--
    }

    const node = new ListNode(key, value)
    this.list.add(node)
    this.map[key] = node
    this.size++
  }
}

class ListNode {
  constructor(key = null, value = null) {
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

  connectNodes(nodeOne, nodeTwo) {
    nodeOne.next = nodeTwo
    nodeTwo.previous = nodeOne
  }

  add(node) {
    this.connectNodes(node, this.head.next)
    this.connectNodes(this.head, node)
  }

  delete(node) {
    this.connectNodes(node.previous, node.next)
  }

  removeLast() {
    let last = this.tail.previous
    this.delete(last)
    return last
  }

  moveToFront(node) {
    this.delete(node)
    this.add(node)
  }
}

module.exports = {
  LRUCache,
}
