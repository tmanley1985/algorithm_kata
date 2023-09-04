const BFS = head => {
  const levels = []

  if (!head) return levels

  const q = [[head, 0]]

  while (q.length) {
    const size = q.length

    for (let i = 0; i <= size; i++) {
      const [node, level] = q.shift()

      levels[level] = levels[level]
        ? levels[level].concat(node.data)
        : [node.data]

      node.left && q.push([node.left, level + 1])
      node.right && q.push([node.right, level + 1])
    }
  }

  return levels
}

module.exports = {
  BFS,
}
