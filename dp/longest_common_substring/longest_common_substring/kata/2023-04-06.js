const log = console.log

const LCSTab = (s1, s2) => {
  const NUM_ROWS = s1.length + 1
  const NUM_COLS = s2.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  let max = 0

  for (let i = 1; i < NUM_ROWS; i++) {
    for (let j = 1; j < NUM_COLS; j++) {
      if (s1[i - 1] !== s2[j - 1]) {
        continue
      }

      dp[i][j] = 1 + dp[i - 1][j - 1]
      max = Math.max(max, dp[i][j])
    }
  }

  return max
}

const LCSRecursive = (wordOne, wordTwo) => {
  const dfs = (i = 0, j = 0, count = 0) => {
    if (i === wordOne.length || j === wordTwo.length) return count

    // Include

    const matchPath =
      wordOne[i] === wordTwo[j] ? dfs(i + 1, j + 1, count + 1) : 0

    // Exclude

    return Math.max(matchPath, dfs(i, j + 1, 0), dfs(i + 1, j, 0))
  }

  return dfs()
}

module.exports = {
  LCSTab,
  LCSRecursive,
}
