const LLNode = (data, next = null) => ({
  data,
  next,
})

const reverseBetween = (head, l, r) => {
  const dummy = LLNode()
  dummy.next = head

  let leftPrevious = dummy
  let current = head

  // We have to have l - 1 because the problem assumes that position 1 is the first
  // node in the list.
  for (let i = 0; i < l - 1; i++) {
    // We just want to maintain that these two are back to back
    // this makes it look very similar to the normal reverse problem.
    leftPrevious = current
    current = current.next
  }

  let previous = null

  // We need to account for the right most node as well
  // so we add 1 here. Remember that r - l gives us the nodes in between both
  // the left and right pointer.
  // We could also just have: i <= r - l. That would do it as well.
  // If you notice, this is exactly the same code to reverse a linked list
  // iteratively.
  for (let i = 0; i < r - l + 1; i++) {
    let tmp = current.next

    current.next = previous
    previous = current
    current = tmp
  }

  leftPrevious.next.next = current
  leftPrevious.next = previous

  return dummy.next
}

module.exports = {
  reverseBetween,
}
