const coinChangeRecursive = (coins, amount) => {
  const dfs = (currentAmount = 0) => {
    if (currentAmount === amount) return 0
    if (currentAmount > amount) return -1

    let minWays = Number.POSITIVE_INFINITY

    // This is an unbounded knapsack problem variant
    // which means we can assume we have an infinite amount
    // of the same coin. This means that at every recursion step
    // we can iterate through all of the coins again.
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]

      const branch = dfs(currentAmount + coin)

      if (branch !== -1) {
        // If we're able to get to 0 it means that we were able to make up
        // the target amount using the coins for this branch. We should add
        // a 1 here because we're considering this current iteration a usage of
        // whatever coin we're on.
        minWays = Math.min(minWays, branch + 1)
      }
    }

    return minWays
  }

  let result = dfs()

  return result === Number.POSITIVE_INFINITY ? -1 : result
}

const coinChangeTab = (coins, amount) => {
  const NUM_ROWS = coins.length + 1
  const NUM_COLS = amount + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  dp[0].forEach((_, i) => {
    if (i > 0) {
      dp[0][i] = Number.POSITIVE_INFINITY
    }
  })

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      const coin = coins[row - 1]
      const difference = column - coin

      // We're excluding the coin here because it's larger than the current column
      // which represents the current target. Meaning, we can't make up that target using
      // the coin, so we should just take
      if (coin > column) {
        dp[row][column] = dp[row - 1][column]
        continue
      }
      // Include
      dp[row][column] = 1 + dp[row][difference]
    }
  }

  let result = dp[coins.length][amount]

  return result === Number.POSITIVE_INFINITY ? -1 : result
}

module.exports = {
  coinChangeRecursive,
  coinChangeTab,
}
