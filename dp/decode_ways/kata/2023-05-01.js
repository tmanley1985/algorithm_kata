const decodeWays = str => {
  const dp = {}

  const dfs = (i = 0) => {
    if (i in dp) return dp[i]

    if (i === str.length) return 1
    // Candidates

    let num = 0

    for (let j = i; j < Math.min(i + 2, str.length); j++) {
      let chars = str.substring(i, j + 1)

      let len = chars.length

      if (
        (len === 1 && chars[0] !== "0") ||
        (len === 2 && chars[0] !== "0" && chars < 27)
      ) {
        num += dfs(j + 1)
      }
    }

    dp[i] = num
    return dp[i]
  }

  return dfs()
}

module.exports = {
  decodeWays,
}
