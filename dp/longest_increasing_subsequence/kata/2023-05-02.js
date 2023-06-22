const lis = (nums, i = 0, previousNum = Number.NEGATIVE_INFINITY) => {
  if (i === nums.length) return 0

  const includeChoice =
    nums[i] > previousNum ? 1 + lis(nums, i + 1, nums[i]) : 0
  const excludeChoice = lis(nums, i + 1, previousNum)

  return Math.max(includeChoice, excludeChoice)
}

module.exports = {
  lis,
}
