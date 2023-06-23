const lis = nums => {
  const dp = {}

  const dfs = (i = 0, prev = Number.NEGATIVE_INFINITY) => {
    let seenKey = `${i},${prev}`

    if (seenKey in dp) return dp[seenKey]

    if (i === nums.length) return 0

    const includeChoice = prev < nums[i] ? 1 + dfs(i + 1, nums[i]) : 0
    const excludeChoice = dfs(i + 1, prev)

    dp[seenKey] = Math.max(includeChoice, excludeChoice)

    return dp[seenKey]
  }

  return dfs()
}

const lisDP = nums => {
  const n = nums.length
  const dp = Array(n).fill(1) // initialize all values to 1
  let maxLIS = 1 // initialize maxLIS to 1

  // TECHNIQUE
  // Compare all numbers that come before current number.
  for (let i = 1; i < n; i++) {
    // Numbers Before
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        maxLIS = Math.max(maxLIS, dp[i]) // update maxLIS
      }
    }
  }

  return maxLIS // return maxLIS instead of the maximum value in dp
}

module.exports = {
  lis,
  lisDP,
}
