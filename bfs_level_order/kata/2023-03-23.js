// I want to get the level order of the tree as a 2d array.

const BFS = root => {

    if (! root) return []

    const queue = [[root, 0]]
    const levels = []


    while (queue.length) {

        const size = queue.length

        for (let i = 0; i < size; i++) {
            
            const [node, currentLevel] = queue.shift()

            levels[currentLevel] = levels[currentLevel] ? levels[currentLevel].concat(node.data) : [node.data]
            
            node.left && queue.push([node.left, currentLevel + 1])
            node.right && queue.push([node.right, currentLevel + 1])
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