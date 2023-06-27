const threeSum = nums => {
  const answers = []

  if (nums.length < 3) return answers

  nums.sort((a, b) => a - b)

  for (let i = 0; i <= nums.length - 3; i++) {
    // Skip duplicates
    if (i > 0 && nums[i - 1] === nums[i]) continue

    let start = i + 1
    let end = nums.length - 1

    while (start < end) {
      if (nums[i] + nums[start] + nums[end] === 0) {
        answers.push([nums[i], nums[start], nums[end]])
      }

      if (nums[i] + nums[start] + nums[end] < 0) {
        let currentStart = start

        while (nums[currentStart] === nums[start] && start < end) start++
      } else {
        let currentEnd = end

        while (nums[currentEnd] === nums[end] && start < end) end--
      }
    }
  }

  return answers
}

module.exports = {
  threeSum,
}
