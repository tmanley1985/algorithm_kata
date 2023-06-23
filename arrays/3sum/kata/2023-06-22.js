const threeSum = nums => {
  const answers = []

  if (nums.length < 3) return answers

  nums.sort((a, b) => a - b)

  // Three Sum needs three pointers.
  // Since we'll have three pointers, we don't want our
  // second or third pointer going out of bounds.
  for (let i = 0; i <= nums.length - 3; i++) {
    // We're avoiding duplicates here as well.
    // If i === 0, then we don't care but at every point after that
    // we need to make sure that the current number is larger than the previous.
    if (i === 0 || nums[i] > nums[i - 1]) {
      let start = i + 1
      let end = nums.length - 1

      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          answers.push([nums[i], nums[start], nums[end]])
        }

        // We have to remove duplicates!
        // Notice that both of these branches look very similar!
        // I would just memorize one and know you'll have to do the other.
        if (nums[i] + nums[start] + nums[end] < 0) {
          // Here we need to move the left pointer up so long as there are duplicate numbers.
          // This is the reason we sorted the array!
          let currentStart = start
          while (nums[currentStart] === nums[start] && start < end) start++
        } else {
          let currentEnd = end
          while (nums[currentEnd] === nums[end] && start < end) end--
        }
      }
    }
  }

  return answers
}

module.exports = {
  threeSum,
}
