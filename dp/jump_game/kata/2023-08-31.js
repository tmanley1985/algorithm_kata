const jumpGame = jumps => {
  const dfs = (i = 0) => {
    if (i >= jumps.length) return true

    const maxJump = jumps[i]

    for (let j = 1; j <= maxJump; j++) {
      if (dfs(i + j)) return true
    }
    return false
  }

  return dfs()
}

const jumpGameGreedy = jumps => {
  let goal = jumps.length - 1

  let i = jumps.length - 1

  while (i > -1) {
    if (i + jumps[i] >= goal) {
      goal = i
    }

    i--
  }

  return goal === 0
}

const jumpGameDP = jumps => {
  const dp = Array.from({ length: jumps.length }).fill(false)

  dp[0] = true

  for (let i = 1; i < jumps.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const distanceToCurrentIndex = i - j

      if (dp[j] && jumps[j] >= distanceToCurrentIndex) {
        dp[i] = true
        break
      }
    }
  }
  return dp[jumps.length - 1]
}

module.exports = {
  jumpGame,
  jumpGameGreedy,
  jumpGameDP,
}
