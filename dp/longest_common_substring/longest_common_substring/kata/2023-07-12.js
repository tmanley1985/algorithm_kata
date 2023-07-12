const LCSRecursive = (wordOne, wordTwo) => {
  const dfs = (i = 0, j = 0, count = 0) => {
    if (i === wordOne.length || j === wordTwo.length) return count

    const matchPath =
      wordOne[i] === wordTwo[j] ? dfs(i + 1, j + 1, count + 1) : 0

    return Math.max(matchPath, dfs(i + 1, j, 0), dfs(i, j + 1, 0))
  }

  return dfs()
}

const LCSTab = (wordOne, wordTwo) => {
  const NUM_ROWS = wordOne.length + 1
  const NUM_COLS = wordTwo.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  let max = 0

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      if (wordOne[row - 1] !== wordTwo[column - 1]) continue

      dp[row][column] = 1 + dp[row - 1][column - 1]

      max = Math.max(max, dp[row][column])
    }
  }

  return max
}

module.exports = {
  LCSRecursive,
  LCSTab,
}
