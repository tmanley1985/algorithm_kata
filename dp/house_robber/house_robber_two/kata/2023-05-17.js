const rob = houses => {
  const dfs = (i, j) => {
    if (i >= j) return 0

    return Math.max(houses[i] + dfs(i + 2, j), dfs(i + 1, j))
  }

  return Math.max(dfs(0, houses.length - 1), dfs(1, houses.length))
}

module.exports = {
  rob,
}
