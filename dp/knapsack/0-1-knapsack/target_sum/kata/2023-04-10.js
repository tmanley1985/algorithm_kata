const targetSumRecursive = (nums, target) => {
  const dfs = (i = 0, remaining = target) => {
    if (i === nums.length) return remaining === 0 ? 1 : 0

    return dfs(i + 1, remaining - nums[i]) + dfs(i + 1, remaining + nums[i])
  }

  return dfs()
}

const targetSumDP = (nums, target) => {
  const offset = nums.reduce((acc, val) => acc + val)

  const NUM_COLS = offset * 2 + 1
  const NUM_ROWS = nums.length + 1 // plus one for zero

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  dp[0][offset] = 1

  for (let row = 0; row < NUM_ROWS - 1; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      let cell = dp[row][column]

      if (cell > 0) {
        dp[row + 1][column - nums[row]] += cell
        dp[row + 1][column + nums[row]] += cell
      }
    }
  }

  return dp[nums.length][target + offset]
}

module.exports = {
  targetSumRecursive,
  targetSumDP,
}
