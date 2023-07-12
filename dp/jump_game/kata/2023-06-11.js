const jumpGame = nums => {
  const dfs = (i = 0) => {
    if (i >= nums.length) return true

    const maxJump = nums[i]

    for (let j = 1; j <= maxJump; j++) {
      if (dfs(i + j)) return true
    }

    return false
  }

  return dfs()
}

const jumpGameGreedy = nums => {
  let goal = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] === goal) {
      goal = i
    }
  }

  return goal === 0
}

const jumpGameDP = nums => {
  const n = nums.length
  const dp = new Array(n).fill(false)
  // By definition, if you start on the first index you can reach it.
  dp[0] = true

  // So you know how fibonacci has to rely on the two previous numbers?
  // Well this is kinda like that but we have to look at all the previous positions
  // so we have to do this loop where we traverse all the numbers before the current.
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // So if dp[j] exists and it's non zero, we basically need to see
      // if the jump for that position (nums[j]) is greater or equal to the distance between the
      // current position i and the previous position j then we know that the current position is
      // reachable!
      if (dp[j] && nums[j] >= i - j) {
        dp[i] = true
        break
      }
    }
  }

  return dp[n - 1]
}

module.exports = {
  jumpGame,
  jumpGameGreedy,
  jumpGameDP,
}
