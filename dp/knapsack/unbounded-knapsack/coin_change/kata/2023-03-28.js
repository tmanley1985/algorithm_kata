const coinChangeTab = (coins, target) => {
  const NUM_ROWS = coins.length + 1
  const NUM_COLS = target + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  dp[0].forEach((_, i) => {
    dp[0][i] = Number.POSITIVE_INFINITY
  })

  dp[0][0] = 0

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      let currentTarget = column
      let currentCoin = coins[row - 1]

      previousMinCoinsForTotal = dp[row - 1][column]

      // Exclude
      if (currentCoin > currentTarget) {
        dp[row][column] = previousMinCoinsForTotal
      } else {
        // Include the coin

        // Use the coin, get the remainder

        const remainder = currentTarget - currentCoin
        const minCoinsForRemainder = dp[row][remainder]

        // We add one because we have to say that if we use the current coin, that
        // is well... using a coin. Once. lol.
        dp[row][column] = Math.min(
          previousMinCoinsForTotal,
          1 + dp[row][column - currentCoin]
        )
      }
    }
  }

  const result = dp[coins.length][target]

  return result === Number.POSITIVE_INFINITY ? -1 : result
}

module.exports = {
  coinChangeTab,
}
