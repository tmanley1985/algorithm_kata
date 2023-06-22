const jumpGame = nums => {
  const dfs = (i = 0) => {
    if (i >= nums.length) return true

    const maxJump = nums[i]

    for (let jump = 1; jump <= maxJump; jump++) {
      if (dfs(i + jump)) return true
    }

    return false
  }

  return dfs()
}

const jumpGameGreedy = nums => {
  let goal = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i]

    if (i + num === goal) {
      goal = i
    }
  }

  return goal === 0
}

module.exports = {
  jumpGame,
  jumpGameGreedy,
}
