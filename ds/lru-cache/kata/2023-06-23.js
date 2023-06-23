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
    // These dummy nodes are to prevent us from having to do null checks on boundaries.
    this.head = new ListNode()
    this.tail = new ListNode()

    this.connectNodes(this.head, this.tail)
  }

  // We'll add to the front of the list (except for the dummy head!)
  add(node) {
    // We first connect the node to the node in front of the head.
    this.connectNodes(node, this.head.next)
    // Then we have to connect the head to the node so that the dummy
    // head stays in front.
    this.connectNodes(this.head, node)
  }

  moveToFront(node) {
    this.delete(node)
    this.add(node)
  }

  connectNodes(nodeOne, nodeTwo) {
    nodeOne.next = nodeTwo
    nodeTwo.previous = nodeOne
  }

  delete(node) {
    this.connectNodes(node.previous, node.next)
  }

  removeLast() {
    let node = this.tail.previous

    this.delete(node)

    return node
  }
}

module.exports = {
  LRUCache,
}
