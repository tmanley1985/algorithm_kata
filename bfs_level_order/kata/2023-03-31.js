const BFS = root => {
  const levels = []
  if (!root) return levels

  const queue = [[root, 0]]

  while (queue.length) {
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const [node, level] = queue.shift()

      levels[level] =
        typeof levels[level] === "undefined"
          ? [node.data]
          : levels[level].concat(node.data)

      node.left && queue.push([node.left, level + 1])
      node.right && queue.push([node.right, level + 1])
    }
  }

  return levels
}

module.exports = {
  BFS,
}
