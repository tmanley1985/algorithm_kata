const avg_sub_array_naive = (nums, k) => {
  const averages = []

  for (let i = 0; i <= nums.length - k; i++) {
    let innerSum = 0

    for (let j = 0; j < k; j++) {
      innerSum += nums[i + j]
    }

    averages.push(innerSum / k)
  }

  return averages
}

const avg_sub_array = (nums, k) => {
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
  avg_sub_array_naive,
  avg_sub_array,
}
