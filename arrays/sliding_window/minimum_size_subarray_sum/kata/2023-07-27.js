const solve = (nums, k) => {
  let windowStart = 0
  let windowSum = 0
  let minLength = Number.POSITIVE_INFINITY

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd]

    while (windowSum >= k) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      windowSum -= nums[windowStart]
      windowStart++
    }
  }

  return minLength === Number.POSITIVE_INFINITY ? 0 : minLength
}

module.exports = {
  solve,
}
