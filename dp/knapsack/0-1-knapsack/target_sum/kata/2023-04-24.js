const targetSumDP = (nums, target) => {
  const offset = nums.reduce((acc, val) => acc + val, 0)

  if (target > offset) return 0

  const NUM_COLS = offset * 2 + 1
  const NUM_ROWS = nums.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  dp[0][offset] = 1

  for (let row = 0; row < NUM_ROWS - 1; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      if (dp[row][column] > 0) {
        const num = nums[row]

        dp[row + 1][column + num] += dp[row][column]
        dp[row + 1][column - num] += dp[row][column]
      }
    }
  }

  return dp[nums.length][target + offset]
}

const targetSumRecursive = (nums, target) => {
  const helper = (i, remaining) => {
    if (i === nums.length) return remaining === 0 ? 1 : 0
    return (
      helper(i + 1, remaining - nums[i]) + helper(i + 1, remaining + nums[i])
    )
  }

  return helper(0, target)
}

module.exports = {
  targetSumRecursive,
  targetSumDP,
}
