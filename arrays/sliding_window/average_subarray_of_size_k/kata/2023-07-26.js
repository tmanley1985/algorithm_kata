const solve = (nums, k) => {
  const averages = []

  let windowStart = 0
  let windowSum = 0

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd]

    if (windowEnd >= k - 1) {
      averages.push(windowSum / k)
      windowSum -= nums[windowStart]
      windowStart++
    }
  }

  return averages
}

module.exports = {
  solve,
}
