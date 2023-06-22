const rob = houses => {
  const dfs = (start, end) => {
    if (start >= end) return 0

    return Math.max(dfs(start + 1, end), houses[start] + dfs(start + 2, end))
  }

  return Math.max(dfs(0, houses.length - 1), dfs(1, houses.length))
}

module.exports = {
  rob,
}
