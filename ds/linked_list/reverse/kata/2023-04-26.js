
const reverse = head => {

    if (!head || ! head.next) return head 

    const newHead = reverse(head.next)

    // Make the head the tail
    head.next.next = head
    head.next = null
    return newHead
}

module.exports = {
    reverse
}