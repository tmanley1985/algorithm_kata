const threeSum = nums => {
  const answers = []

  if (nums.length < 3) return answers

  nums.sort((a, b) => a - b)

  for (let i = 0; i <= nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let start = i + 1
    let end = nums.length - 1

    while (start < end) {
      if (nums[i] + nums[start] + nums[end] === 0) {
        answers.push([nums[i], nums[start], nums[end]])
      }

      if (nums[i] + nums[start] + nums[end] < 0) {
        let current = start

        while (nums[current] === nums[start] && start < end) start++
      } else {
        let current = end

        while (nums[current] === nums[end] && start < end) end--
      }
    }
  }

  return answers
}

module.exports = {
  threeSum,
}
