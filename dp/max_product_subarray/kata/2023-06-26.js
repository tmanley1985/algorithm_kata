const maxProductSubarray = nums => {
  let max = nums[0]
  let min = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]

    // We need this temp variable because we'll be updating
    // the min value.
    let tempMax = Math.max(num, num * max, num * min)
    min = Math.min(num, num * max, num * min)
    max = tempMax

    result = Math.max(max, result)
  }

  return result
}

module.exports = {
  maxProductSubarray,
}
