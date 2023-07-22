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
  let i = nums.length - 1

  while (i > -1) {
    if (i + nums[i] >= goal) {
      goal = i
    }
    i--
  }

  return goal === 0
}

const jumpGameDP = nums => {
  const dp = Array.from({ length: nums.length }).fill(false)

  dp[0] = true

  for (let i = 1; i < nums.length; i++) {
    for (let numBefore = i - 1; numBefore >= 0; numBefore--) {
      let distanceToCurrentIndex = i - numBefore
      if (nums[numBefore] >= distanceToCurrentIndex) {
        dp[i] = true
        break
      }
    }
  }

  return dp[nums.length - 1]
}

module.exports = {
  jumpGame,
  jumpGameGreedy,
  jumpGameDP,
}
