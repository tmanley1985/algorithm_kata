const maxProductSubarray = nums => {
  let max = nums[0]

  // What?! Why do we keep track of the mininum number?
  // Well... it's because of negative numbers.
  // [-1, -2, -3] has a max product of 6.
  // We know that by looking.
  // But computationally, we need to keep track of the
  // min number of the previous subarray in case we're
  // on a negative number currently. We can then get (-number *
  // -number) which will give us a positive result.
  let min = nums[0]

  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const tempMax = Math.max(num, max * num, min * num)
    min = Math.min(num, max * num, min * num)
    max = tempMax

    result = Math.max(max, result)
  }

  return result
}

module.exports = {
  maxProductSubarray,
}
