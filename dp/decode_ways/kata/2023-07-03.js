const decodeWays = s => {
  const dfs = (i = 0) => {
    if (i === s.length) return 1

    let num = 0
    for (let j = i; j < Math.min(i + 2, s.length); j++) {
      let candidate = s.slice(i, j + 1)

      let valid =
        (i === j && candidate[0] > 0) || (candidate[0] > 0 && candidate < 27)

      if (valid) {
        num += dfs(j + 1)
      }
    }

    return num
  }

  return dfs()
}

const decodeWaysTab = s => {
  if (s.length === 0 || s[0] === "0") return 0

  const dp = Array.from({ length: s.length + 1 }).fill(0)

  // An empty string has 1 decoding.
  dp[0] = 1
  // A string of length 1 has 1 decoding.
  dp[1] = 1

  for (let i = 2; i <= s.length; i++) {
    const oneChar = s.slice(i - 1, i)
    const twoChars = s.slice(i - 2, i)

    // If the character before the current is between 1 and 9 inclusive.
    if (0 < oneChar < 10) {
      dp[i] += dp[i - 1]
    }

    // If the character before the current is between 10 and 26 inclusive.
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
