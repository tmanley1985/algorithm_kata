const targetSumRecursive = (nums, target) => {
  const dp = {}

  const backtrack = (i = 0, remaining = target) => {
    const seenKey = `${i},${remaining}`

    if (i === nums.length) return remaining === 0 ? 1 : 0

    if (seenKey in dp) return dp[seenKey]

    dp[seenKey] =
      backtrack(i + 1, remaining - nums[i]) +
      backtrack(i + 1, remaining + nums[i])

    return dp[seenKey]
  }

  return backtrack()
}

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
      const numWays = dp[row][column]

      if (numWays > 0) {
        const absolute_distance_from_zero = nums[row]

        dp[row + 1][column - absolute_distance_from_zero] += numWays
        dp[row + 1][column + absolute_distance_from_zero] += numWays
      }
    }
  }

  return dp[nums.length][target + offset]
}

module.exports = {
  targetSumRecursive,
  targetSumDP,
}
