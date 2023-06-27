const rodCuttingRecursive = (prices, length) => {
  if (length === 0) return 0

  let maxRevenue = Number.NEGATIVE_INFINITY

  for (let i = 1; i <= length; i++) {
    maxRevenue = Math.max(
      maxRevenue,
      prices[i] + rodCuttingRecursive(prices, length - i)
    )
  }
  return maxRevenue
}

const rodCuttingDP = (prices, length) => {
  const dp = Array.from({ length: length + 1 }).fill(0)

  for (let rodLength = 1; rodLength < dp.length; rodLength++) {
    let maxRevenue = Number.NEGATIVE_INFINITY

    for (let possibleCut = 1; possibleCut <= rodLength; possibleCut++) {
      maxRevenue = Math.max(
        maxRevenue,
        prices[possibleCut] + dp[rodLength - possibleCut]
      )
    }

    dp[rodLength] = maxRevenue
  }

  return dp[length]
}

module.exports = {
  rodCuttingRecursive,
  rodCuttingDP,
}
