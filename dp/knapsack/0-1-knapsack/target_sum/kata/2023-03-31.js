const targetSumRecursive = (nums, target) => {
  const dp = {}

  const backtrack = (currentIndex = 0, currentSum = 0) => {
    const seenKey = `${currentIndex},${currentSum}`

    if (currentIndex === nums.length) return currentSum === target ? 1 : 0

    if (seenKey in dp) return dp[seenKey]

    dp[seenKey] =
      backtrack(currentIndex + 1, currentSum + nums[currentIndex]) +
      backtrack(currentIndex + 1, currentSum - nums[currentIndex])

    return dp[seenKey]
  }

  return backtrack()
}

module.exports = {
  targetSumRecursive,
}
