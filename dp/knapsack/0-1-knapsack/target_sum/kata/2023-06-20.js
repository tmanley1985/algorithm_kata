const targetSumDP = (nums, targetSum) => {
  const offset = nums.reduce((acc, val) => acc + val, 0)

  const NUM_COLS = 2 * offset + 1
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

  return dp[nums.length][offset + targetSum]
}

const targetSumRecursive = (nums, targetSum) => {
  const dfs = (i = 0, currentSum = 0) => {
    // Notice how we're only ever returning 1 if we've reached the end and the currentSum
    // is the targetSum?
    if (i === nums.length) return currentSum === targetSum ? 1 : 0

    // This is the add and subtract branches added together. Each recursive tree that ends
    // with the currentSum reaching the targetSum will return 1 and these will be added together.
    return dfs(i + 1, currentSum - nums[i]) + dfs(i + 1, currentSum + nums[i])
  }

  return dfs()
}

module.exports = {
  targetSumRecursive,
}
