const twoSumIINaive = (nums, target) => {
  // Why do we have nums.length - 1 here?
  // Well think about it, we're comparing each number pair
  // But we don't want to compare the same number to itself!
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

  return []
}

module.exports = {
  twoSumIINaive,
  twoSumII,
}
