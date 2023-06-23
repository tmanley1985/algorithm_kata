const LPS = word => {
  const dfs = (i, j, count) => {
    if (i === word.length || j === -1) return count

    if (word[i] === word[j]) return dfs(i + 1, j - 1, count + 1)

    return Math.max(dfs(i, j - 1, count), dfs(i + 1, j, count))
  }

  return dfs(0, word.length - 1, 0)
}

module.exports = {
  LPS,
}
