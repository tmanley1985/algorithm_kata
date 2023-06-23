const coinChangeRecursive = (coins, target) => {
  const dfs = remaining => {
    if (remaining === 0) return 1

    if (remaining < 0) return 0

    let min = Number.POSITIVE_INFINITY

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]

      let numWays = dfs(remaining - coin)

      if (numWays > 0) {
        min = Math.min(min, numWays)
      }
    }

    return min === Number.POSITIVE_INFINITY ? min : min + 1
  }

  const result = dfs(target)

  return result === Number.POSITIVE_INFINITY ? -1 : result - 1
}

const coinChangeTab = (coins, target) => {
  const NUM_COLS = target + 1
  const NUM_ROWS = coins.length + 1

  // if ( target >= NUM_COLS ) return - 1

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
      const previousMinCoinsForAmount = dp[row - 1][column]

      if (coin > currentAmount) {
        dp[row][column] = previousMinCoinsForAmount
      } else {
        let difference = currentAmount - coin

        dp[row][column] = Math.min(
          previousMinCoinsForAmount,
          dp[row][difference] + 1
        )
      }
    }
  }

  const result = dp[coins.length][target]

  return result === Number.POSITIVE_INFINITY ? -1 : result
}
module.exports = {
  coinChangeRecursive,
  coinChangeTab,
}
