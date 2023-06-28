const reverseRecursive = head => {
  if (!head || !head.next) return head

  const newHead = reverse(head.next)

  head.next.next = head
  head.next = null

  return newHead
}

const reverse = head => {
  let previous = null
  let current = head

  while (current) {
    // We need to save this because we're about to overwrite it!
    let tmp = current.next
    // Current -> becomes Previous <- Current
    current.next = previous

    // We bump our pointers up here.
    // Eventually previous will point to the last node
    // current will point to null
    previous = current
    current = tmp
  }

  return previous
}

module.exports = {
  reverseRecursive,
  reverse,
}
