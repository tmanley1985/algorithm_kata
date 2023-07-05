const editDistanceRecursive = (wordOne, wordTwo) => {
  const dfs = (i = 0, j = 0) => {
    if (i === wordOne.length) return wordTwo.length - j
    if (j === wordTwo.length) return wordOne.length - i

    if (wordOne[i] === wordTwo[j]) {
      return dfs(i + 1, j + 1)
    }

    const substitution = dfs(i + 1, j + 1)
    const deletion = dfs(i + 1, j)
    const insertion = dfs(i, j + 1)

    return 1 + Math.min(substitution, deletion, insertion)
  }

  return dfs()
}

const editDistanceTab = (wordOne, wordTwo) => {
  const NUM_ROWS = wordOne.length + 1
  const NUM_COLS = wordTwo.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  for (let i = 0; i < NUM_ROWS; i++) {
    dp[i][0] = i
  }

  for (let i = 0; i < NUM_COLS; i++) {
    dp[0][i] = i
  }

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      if (wordOne[row] === wordTwo[column]) {
        dp[row][column] = dp[row - 1][column - 1]
        continue
      }

      dp[row][column] =
        1 +
        Math.min(
          dp[row - 1][column - 1],
          dp[row - 1][column],
          dp[row1][column - 1]
        )
    }
  }

  return dp[(wordOne.length, wordTwo.length)]
}

module.exports = {
  editDistanceRecursive,
  //   editDistanceTab,
}
