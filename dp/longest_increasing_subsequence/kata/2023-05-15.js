const log = console.log

const lis = nums => {
  const dfs = (i = 0, prev = Number.NEGATIVE_INFINITY) => {
    if (i === nums.length) return 0

    const includeChoice = nums[i] > prev ? 1 + dfs(i + 1, nums[i]) : 0
    const excludeChoice = dfs(i + 1, prev)

    return Math.max(includeChoice, excludeChoice)
  }

  return dfs()
}

const lisDP = nums => {
  const dp = Array.from({ length: nums.length }).fill(1)

  let maxLIS = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // Include
        dp[i] = Math.max(dp[i], dp[j] + 1)
        maxLIS = Math.max(maxLIS, dp[i])
      }
    }
  }

  return maxLIS
}

module.exports = {
  lis,
  lisDP,
}
