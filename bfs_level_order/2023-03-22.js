
// I want to get the level order of the tree as a 2d array.

const BFS = root => {

    const levels  = []

    if (!root) return levels

    // Root and level
    const queue = [[root, 0]]

    while (queue.length) {
        const size = queue.length

        for (let i = 0; i < size; i++) {
            const [node, level] = queue.shift()
            
            levels[level] = levels[level] === undefined ? [node.data] : levels[level].concat(node.data)

            node.left && queue.push([node.left, level + 1])
            node.right && queue.push([node.right, level + 1])
        }
    }

    return levels

}

const BNode = (data, left = null, right = null) => ({
    data,
    left,
    right
})

const tree = BNode(1, BNode(2, BNode(4)), BNode(3, BNode(5)))

console.log(BFS(tree))