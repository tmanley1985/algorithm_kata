const targetSumRecursive = (nums, targetSum) => {
  const dfs = (i = 0, target = 0) => {
    if (i === nums.length) return target === targetSum ? 1 : 0

    return dfs(i + 1, target + nums[i]) + dfs(i + 1, target - nums[i])
  }

  return dfs()
}

const targetSumDP = (nums, targetSum) => {
  const offset = nums.reduce((acc, val) => acc + val, 0)

  const NUM_COLS = offset * 2 + 1
  const NUM_ROWS = nums.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_ROWS }).fill(0)
  )

  dp[0][offset] = 1

  for (let row = 0; row < NUM_ROWS; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      const num = nums[column]

      if (dp[row][column] > 0) {
        dp[row + 1][column + num] += dp[row][column]
        dp[row + 1][column - num] += dp[row][column]
      }
    }
  }

  return dp[nums.length][offset + targetSum]
}

module.exports = {
  targetSumRecursive,
}
