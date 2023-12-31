const LCSRecursive = (wordOne, wordTwo) => {
  const dfs = (i, j, count) => {
    if (i === wordOne.length || j === wordTwo.length) return count

    if (wordOne[i] === wordTwo[j]) return dfs(i + 1, j + 1, count + 1)

    return Math.max(dfs(i + 1, j, count), dfs(i, j + 1, count))
  }

  return dfs(0, 0, 0)
}

module.exports = {
  LCSRecursive,
}
