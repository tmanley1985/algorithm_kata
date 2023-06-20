
const LNode = (data, next = null) => ({
    data, next
})

const iterate = head => {

    while (head) {
        console.log(head)

        head = head.next
    }
}

const tree = LNode(1, LNode(2, LNode(3)))

console.log(iterate(tree))