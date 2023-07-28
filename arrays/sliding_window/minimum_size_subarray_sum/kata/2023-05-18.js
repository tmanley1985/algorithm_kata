// https://leetcode.com/problems/minimum-size-subarray-sum/
const min_subarray_sum_naive = (nums, k) => {
  let minLength = Number.POSITIVE_INFINITY

  for (let i = 0; i < nums.length; i++) {
    let innerSum = 0

    for (let j = i; j < nums.length; j++) {
      innerSum += nums[j]

      if (innerSum >= k) {
        minLength = Math.min(minLength, j - i + 1)
        break
      }
    }
  }

  return minLength === Number.POSITIVE_INFINITY ? 0 : minLength
}

const min_subarray_sum = (nums, k) => {
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
  min_subarray_sum_naive,
  min_subarray_sum,
}
