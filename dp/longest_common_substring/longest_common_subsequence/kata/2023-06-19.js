const LCSRecursive = (wordOne, wordTwo) => {
  const dfs = (i = 0, j = 0, count = 0) => {
    if (i === wordOne.length || j === wordTwo.length) return count

    if (wordOne[i] === wordTwo[j]) return dfs(i + 1, j + 1, count + 1)

    return Math.max(dfs(i + 1, j, count), dfs(i, j + 1, count))
  }

  return dfs()
}

const LCSMemo = (wordOne, wordTwo) => {
  const memo = {}

  const dfs = (i = 0, j = 0, count = 0) => {
    const seenKey = `${i},${j},${count}`

    if (seenKey in memo) return memo[seenKey]

    if (i === wordOne.length || j === wordTwo.length) return count

    if (wordOne[i] === wordTwo[j]) {
      memo[seenKey] = dfs(i + 1, j + 1, count + 1)
      return memo[seenKey]
    }

    memo[seenKey] = Math.max(dfs(i + 1, j, count), dfs(i, j + 1, count))
    return memo[seenKey]
  }

  return dfs()
}

const LCSTab = (wordOne, wordTwo) => {
  const NUM_ROWS = wordOne.length + 1
  const NUM_COLS = wordTwo.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      if (wordOne[row - 1] === wordTwo[column - 1]) {
        dp[row][column] = 1 + dp[row - 1][column - 1]
        continue
      }

      dp[row][column] = Math.max(dp[row - 1][column], dp[row][column - 1])
    }
  }

  return dp[wordOne.length][wordTwo.length]
}

module.exports = {
  LCSRecursive,
  LCSTab,
}
