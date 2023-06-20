const targetSumRecursive = (nums, target, currentSum = 0, currentIndex = 0) => {
  if (currentIndex === nums.length) return currentSum === target ? 1 : 0

  const subtractChoice = currentSum - nums[currentIndex]
  const addChoice = currentSum + nums[currentIndex]

  return (
    targetSumRecursive(nums, target, subtractChoice, currentIndex + 1) +
    targetSumRecursive(nums, target, addChoice, currentIndex + 1)
  )
}

module.exports = {
  targetSumRecursive,
}
