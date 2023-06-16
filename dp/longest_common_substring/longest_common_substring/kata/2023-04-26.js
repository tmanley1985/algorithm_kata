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

module.exports = {
  LCSTab,
}
