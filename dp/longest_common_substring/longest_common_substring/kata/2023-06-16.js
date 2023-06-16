const LCSTab = (wordOne, wordTwo) => {
  const NUM_ROWS = wordOne.length + 1
  const NUM_COLS = wordTwo.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  let max = 0

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      // Remember: We've added a row and column for the empty string, so we'll
      // have to subtract one to get the actual character.
      if (wordOne[row - 1] !== wordTwo[column - 1]) continue

      dp[row][column] = 1 + dp[row - 1][column - 1]

      max = Math.max(max, dp[row][column])
    }
  }

  return max
}

const LCSRecursive = (wordOne, wordTwo) => {
  const dfs = (i = 0, j = 0, count = 0) => {
    if (i === wordOne.length || j === wordTwo.length) return count

    let matchPath = wordOne[i] === wordTwo[j] ? dfs(i + 1, j + 1, count + 1) : 0

    // Those last two branches pass 0 in for the count because remember:
    // Substring problems have to be contiguous! Meaning if there's a break in
    // the matches, then we're just going to forget the count and start over.
    return Math.max(matchPath, dfs(i + 1, j, 0), dfs(i, j + 1, 0))
  }

  return dfs(0, 0, 0)
}

module.exports = {
  LCSTab,
  LCSRecursive,
}
