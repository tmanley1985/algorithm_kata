const decodeWays = s => {
  const dp = {}
  const dfs = (i = 0) => {
    if (i in dp) return dp[i]
    if (i === s.length) return 1

    let num = 0

    for (let j = i; j < Math.min(i + 2, s.length); j++) {
      const state = s.substring(i, j + 1)

      const valid = (i === j && state[0] > 0) || (state[0] > 0 && state < 27)

      if (valid) {
        num += dfs(j + 1)
      }
    }

    dp[i] = num
    return num
  }

  return dfs()
}

module.exports = {
  decodeWays,
}
