const rodCuttingRecursive = (prices, length) => {
  if (length === 0) return 0

  let maxRevenue = Number.NEGATIVE_INFINITY

  // Anything added to negative infinity will just be negative infinity
  // which is great because if you have a negative length here, then this path of
  // cuts shouldn't even be considered. But you wouldn't want to return 0 because
  // those previous cuts will still add up to some non-zero number. But if you return
  // negative infinity here, then the prices of those cuts will sum to negative infinity!
  if (length < 0) return maxRevenue

  for (let cut = 1; cut <= length; cut++) {
    maxRevenue = Math.max(
      maxRevenue,
      prices[cut] + rodCuttingRecursive(prices, length - cut)
    )
  }

  return maxRevenue === Number.NEGATIVE_INFINITY ? 0 : maxRevenue
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
