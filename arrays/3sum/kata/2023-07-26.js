const threeSum = nums => {
  let triplets = []
  if (nums.length < 3) return triplets
  nums.sort((a, b) => a - b)

  for (let i = 0; i <= nums.length - 3; i++) {
    // This is how we remove duplicates.
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let start = i + 1
    let end = nums.length - 1

    while (start < end) {
      if (nums[i] + nums[start] + nums[end] === 0) {
        triplets.push([nums[i], nums[start], nums[end]])
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

  return triplets
}

module.exports = {
  threeSum,
}
