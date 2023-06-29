const threeSum = nums => {
  const answers = []

  if (nums.length < 3) return answer

  // We need to sort these numbers
  // so that we'll be able to skip duplicates
  // later on by comparing previous numbers.
  nums.sort((a, b) => a - b)

  // For each number, you're going to have a start and and end pointer
  // so for Three Sum you need Three Pointers is a good way to remember it.
  for (let i = 0; i <= nums.length - 3; i++) {
    // If i === 0, it has no previous numbers.
    // But as soon as we're on the next index, we need to start
    // skipping duplicates.
    if (i > 0 && nums[i] === nums[i - 1]) continue

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
