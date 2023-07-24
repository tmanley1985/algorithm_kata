const rodCutting = (prices, length) => {
  if (length === 0) return 0
  let maxRevenue = Number.NEGATIVE_INFINITY
  if (length < 0) return max

  for (let cut = 1; cut <= length; cut++) {
    const remaining = rodCutting(prices, length - cut)

    maxRevenue = Math.max(maxRevenue, prices[cut] + remaining)
  }

  return maxRevenue === Number.NEGATIVE_INFINITY ? 0 : maxRevenue
}

const rodCuttingDP = (prices, length) => {
  const dp = Array.from({ length: length + 1 }).fill(0)

  for (let rodLength = 1; rodLength < dp.length; rodLength++) {
    let maxRevenue = Number.NEGATIVE_INFINITY

    for (let cut = 1; cut <= rodLength; cut++) {
      maxRevenue = Math.max(maxRevenue, prices[cut] + dp[rodLength - cut])
    }

    dp[rodLength] = maxRevenue
  }

  return dp[length]
}

module.exports = {
  rodCutting,
  rodCuttingDP,
}
