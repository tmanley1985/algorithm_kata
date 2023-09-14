const targetSum = (nums, target) => {
  const seen = {}

  const dfs = (i = 0, amount = 0) => {
    const seenKey = `${i}-${amount}`

    if (seenKey in seen) return seen[seenKey]

    if (i === nums.length) return amount === target ? 1 : 0

    seen[seenKey] = dfs(i + 1, amount + nums[i]) + dfs(i + 1, amount - nums[i])

    return seen[seenKey]
  }

  return dfs()
}

const targetSumDP = (nums, target) => {
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
  targetSumDP,
}
