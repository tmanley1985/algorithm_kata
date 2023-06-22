const BFS = head => {
  if (!head) return head

  const queue = [[head, 0]]
  const levels = []

  while (queue.length) {
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const [node, level] = queue.shift()

      levels[level] = levels[level]
        ? levels[level].concat(node.data)
        : [node.data]

      node.left && queue.push([node.left, level + 1])
      node.right && queue.push([node.right, level + 1])
    }
  }

  return levels
}

module.exports = {
  BFS,
}
