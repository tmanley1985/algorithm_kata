const targetSum = (nums, target) => {
  const cache = {}

  const dfs = (i, remaining) => {
    const seenKey = `${i},${remaining}`

    if (seenKey in cache) return cache[seenKey]
    if (i === nums.length) return remaining === 0 ? 1 : 0

    cache[seenKey] =
      dfs(i + 1, remaining - nums[i]) + dfs(i + 1, remaining + nums[i])
    return cache[seenKey]
  }

  return dfs(0, target)
}

const targeSumDP = (nums, target) => {
  const offset = nums.reduce((acc, val) => acc + val, 0)
  const NUM_ROWS = nums.length + 1
  const NUM_COLS = offset * 2 + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  dp[0][offset] = 1

  for (let row = 0; row < NUM_ROWS - 1; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      if (dp[row][column] > 0) {
        dp[row + 1][column - nums[row]] += dp[row][column]
        dp[row + 1][column + nums[row]] += dp[row][column]
      }
    }
  }

  return dp[nums.length][offset + target]
}

module.exports = {
  targetSum,
  targeSumDP,
}
