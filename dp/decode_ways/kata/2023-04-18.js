// https://leetcode.com/problems/decode-ways/

const decodeWays = str => {
  // This is a fancy way of having the base case of an empty string
  const dp = {
    // cache i:
    [str.length]: 1,
  }

  const dfs = i => {
    if (i in dp) return dp[i]

    if (str[i] === "0") return 0

    let result = dfs(i + 1)

    if (
      // if double-digit value between 10-26
      i + 1 < str.length && // if we do have a second char that comes after the first
      (str[i] === "1" || // if double-digit value starts with 1 and there is a second digit then we have a valid double-digit value that starts with 1 ex: 10 - 19 // if double-digit value starts with 2 and there is a second digit from 0 - 6, then we have a valid double-digit value that is in the range of 20-26
        (str[i] === "2" && "0123456".search(str[i + 1]) !== -1))
    ) {
      result += dfs(i + 2) // add dfs of valid double-digit value to current result
    }

    dp[i] = result
    return result
  }

  return dfs(0)
}

const decodeWaysTab = s => {
  if (!s || s[0] === "0") {
    return 0
  }

  const n = s.length
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1]
    }

    if (s.slice(i - 2, i) >= "10" && s.slice(i - 2, i) <= "26") {
      dp[i] += dp[i - 2]
    }
  }

  return dp[n]
}

module.exports = {
  decodeWays,
  decodeWaysTab,
}
