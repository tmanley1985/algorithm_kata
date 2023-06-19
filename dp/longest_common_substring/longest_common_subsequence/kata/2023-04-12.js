// Longest Common Subsequence

const LCSTab = (wordOne, wordTwo) => {
  const NUM_COLS = wordOne.length + 1
  const NUM_ROWS = wordTwo.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  for (let wordTwoIndex = 1; wordTwoIndex < NUM_ROWS; wordTwoIndex++) {
    for (let wordOneIndex = 1; wordOneIndex < NUM_COLS; wordOneIndex++) {
      if (wordOne[wordOneIndex - 1] == wordTwo[wordTwoIndex - 1]) {
        dp[wordTwoIndex][wordOneIndex] =
          dp[wordTwoIndex - 1][wordOneIndex - 1] + 1
      } else {
        dp[wordTwoIndex][wordOneIndex] = Math.max(
          dp[wordTwoIndex][wordOneIndex - 1],
          dp[wordTwoIndex - 1][wordOneIndex]
        )
      }
    }
  }
  return dp[wordTwo.length][wordOne.length]
}

module.exports = {
  LCSTab,
}
