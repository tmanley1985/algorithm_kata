const twoSumIINaive = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i + 1, j + 1]
    }
  }

  return []
}

const twoSumII = (nums, target) => {
  const dp = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (complement in dp) return [dp[complement] + 1, i + 1]

    dp[nums[i]] = i
  }
}

module.exports = {
  twoSumIINaive,
  twoSumII,
}
