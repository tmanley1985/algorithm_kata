const decodeWays = s => {
  const dfs = (i = 0) => {
    if (i === s.length) return 1

    let num = 0

    for (let j = i; j < Math.min(i + 2, s.length); j++) {
      const prefix = s.slice(i, j + 1)

      const isValid =
        (i === j && prefix[0] > 0) || (prefix[0] > 0 && prefix[0] < 27)

      if (isValid) {
        num += dfs(j + 1)
      }
    }

    return num
  }

  return dfs()
}

const decodeWaysTab = s => {
  const dp = Array.from({ length: s.length + 1 }).fill(0)

  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= s.length; i++) {
    const oneChar = s.slice(i - 1, i)
    const twoChars = s.slice(i - 2, i)

    if (0 < oneChar < 10) {
      dp[i] += dp[i - 1]
    }

    if (9 < twoChars < 27) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[s.length]
}

module.exports = {
  decodeWays,
  decodeWaysTab,
}
