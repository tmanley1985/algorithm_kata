const ListNode = (data, next = null) => ({
  data,
  next,
})

const reverseBetween = (head, left, right) => {
  // if empty or single node return head

  if (!head || !head.next) return head

  const dummy = ListNode(-1, head)

  // Just assume that the previous value before the left pointer is the dummy
  let prev = dummy

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }

  let start = prev.next
  let newHead = start.next

  const numberOfNodesBetween = right - left

  for (let i = 0; i < numberOfNodesBetween; i++) {
    // Hop and reverse
    start.next = newHead.next
    newHead.next = prev.next

    // Attach new head to previous and set new head
    prev.next = newHead
    newHead = start.next
  }

  // dummy.next points to the head whether it has been changed or not.
  return dummy.next
}

const LLNode = (data, next = null) => ({
  data,
  next,
})
const LL = LLNode(1, LLNode(2, LLNode(3, LLNode(4, LLNode(5)))))

module.exports = {
  reverseBetween,
}
