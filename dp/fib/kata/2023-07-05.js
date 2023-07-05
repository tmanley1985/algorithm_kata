const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n < 2) return n

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

  return memo[n]
}

const fibTab = n => {
  const dp = Array.from({ length: n + 1 }).fill(0)

  dp[1] = 1

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

module.exports = {
  fib,
  fibTab,
}
