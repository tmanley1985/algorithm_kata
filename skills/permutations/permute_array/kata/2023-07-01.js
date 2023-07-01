const permuteArray = nums => {
  const permutations = []
  if (nums.length === 0) return permutations

  const dfs = (i = 0) => {
    if (i === nums.length - 1) {
      permutations.push([...nums])
      return
    }

    for (let j = i; j < nums.length; j++) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      dfs(i + 1)
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  dfs()

  return permutations
}

module.exports = {
  permuteArray,
}
