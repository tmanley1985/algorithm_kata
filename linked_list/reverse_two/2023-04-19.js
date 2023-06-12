const ListNode = (data, next = null) => ({
    data, next
})

const reverseBetween = (head, left, right) => {
    if (!head || left === right) {
      return head;
    }
  
    const dummy = ListNode(-1, head);

    // We are going to assume that the dummy is the previous node before the left
    // pointer.
    let prev = dummy;
  
    // We'll find the previous node before the left pointer
    // because we will need to reverse everything after that.
    for (let i = 0; i < left - 1; i++) {
      prev = prev.next;
    }
  
    // Initially the start will be the left pointer.
    let start = prev.next;
    // This will be the new head for the sequence.
    let newHead = start.next;
  
    // We're going to do three things here:

    // 1. Constantly move the left pointer's next value to the right.
    // 2. Find the new head for the sequence and reverse it's connection.
    // 3. Set the previous node's next value to the newHead.
    // 4. Move the new head to the hop.


    // Visual: 1 -> 2 -> 3
    //         parent -> child -> grandchild
    //         child -> parent
    //         parent -> grandchild

    // I like to think of this as the child becomes the parent.
    // The parent becomes the child
    // The grandchild is still the grandchild
    for (let i = 0; i < right - left; i++) {

      // Hop child and reverse middle
      start.next = newHead.next;
      newHead.next = prev.next;

      // Set new newHead for previous node
      prev.next = newHead;
      // Move the newHead equal to the hop.
      // When this is finished, the new head will be the right pointer.
      newHead = start.next;
    }
  
    return dummy.next;
  };


const LL = ListNode(1, 
    ListNode(2, 
        ListNode(3,
             ListNode(4, 
                ListNode(5)
            )
        )
    )
)

console.log(reverseBetween(LL, 2, 4))