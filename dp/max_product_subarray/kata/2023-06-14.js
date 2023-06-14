const maxProductSubarray = nums => {
  let max = nums[0]
  let min = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]
    let tempMax = Math.max(num, max * num, min * num)
    min = Math.min(num, max * num, min * num)
    max = tempMax

    result = Math.max(max, result)
  }

  return result
}

module.exports = {
  maxProductSubarray,
}
