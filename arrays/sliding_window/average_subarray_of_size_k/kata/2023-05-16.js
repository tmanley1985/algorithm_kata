const avg_sub_array_naive = (nums, k) => {
  let averages = []

  for (let i = 0; i <= nums.length - k; i++) {
    let sum = 0

    for (let j = 0; j < k; j++) {
      sum += nums[i + j]
    }

    averages.push(sum / k)
  }

  return averages
}

const avg_sub_array = (nums, k) => {
  const averages = []

  let windowStart = 0
  let windowSum = 0

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd]

    // Why are we doing this? Think about it.
    // Once the window size grows to size k,
    // we need to start pushing averages and then
    // removing the trailing number out of our window.
    // Then we budge our left pointer up.
    // The k - 1 is because of zero based indexing.
    // Now why aren't we calculating the window size here?
    // I mean what if the windowStart gets bumped up and the window
    // size shrinks? Well that won't happen because the right pointer
    // will terminate the loop remember?
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
