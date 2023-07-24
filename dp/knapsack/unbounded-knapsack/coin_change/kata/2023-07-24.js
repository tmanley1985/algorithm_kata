const coinChange = (coins, amount) => {
  const dfs = (remaining = 0) => {
    if (remaining === amount) return 0
    if (remaining > amount) return -1

    let min = Number.POSITIVE_INFINITY

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]

      const branch = dfs(remaining + coin)

      if (branch > -1) {
        min = Math.min(min, branch + 1)
      }
    }

    return min
  }

  let result = dfs()

  return result === Number.POSITIVE_INFINITY ? -1 : result
}

const coinChangeDP = (coins, amount) => {
  const NUM_ROWS = coins.length + 1
  const NUM_COLS = amount + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  dp[0].forEach((_, i) => {
    dp[0][i] = Number.POSITIVE_INFINITY
  })

  dp[0][0] = 0

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      const coin = coins[row - 1]
      const currentAmount = column

      if (coin > currentAmount) {
        dp[row][column] = dp[row - 1][column]
        continue
      }

      const difference = currentAmount - coin

      dp[row][column] = 1 + dp[row][difference]
    }
  }

  const result = dp[coins.length][amount]

  return result === Number.POSITIVE_INFINITY ? -1 : result
}

module.exports = {
  coinChange,
  coinChangeDP,
}
