const targetSumDP = (nums, target) => {
  const offset = nums.reduce((acc, val) => acc + val, 0)

  const NUM_COLS = offset * 2 + 1
  const NUM_ROWS = nums.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  dp[0][offset] = 1

  for (let row = 0; row < NUM_ROWS - 1; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      if (dp[row][column] > 0) {
        dp[row + 1][column + nums[row]] += dp[row][column]
        dp[row + 1][column - nums[row]] += dp[row][column]
      }
    }
  }

  return dp[nums.length][target + offset]
}

const targetSumRecursive = (nums, target) => {
  const dp = {}

  const backtrack = (currentIndex = 0, currentTarget = 0) => {
    const seenKey = `${currentIndex},${currentTarget}`

    if (seenKey in dp) return dp[seenKey]

    if (currentIndex === nums.length) return currentTarget === target ? 1 : 0

    dp[seenKey] =
      backtrack(currentIndex + 1, currentTarget - nums[currentIndex]) +
      backtrack(currentIndex + 1, currentTarget + nums[currentIndex])

    return dp[seenKey]
  }

  return backtrack()
}

module.exports = {
  targetSumRecursive,
  targetSumDP,
}
