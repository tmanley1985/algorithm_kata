const jumpGame = nums => {
  const dfs = (i = 0) => {
    if (i >= nums.length - 1) return true

    const maxJump = nums[i]

    for (let step = 1; step <= maxJump; step++) {
      if (dfs(i + step)) return true
    }

    return false
  }

  return dfs()
}

const jumpGameGreedy = nums => {
  let goal = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
    const maxJump = nums[i]

    if (i + maxJump === goal) {
      goal = i
    }
  }

  return goal === 0
}

module.exports = {
  jumpGame,
  jumpGameGreedy,
}
