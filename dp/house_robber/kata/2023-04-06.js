const rob = houses => {
  const dfs = (i = 0) => {
    if (i >= houses.length) return 0

    return Math.max(dfs(i + 1), houses[i] + dfs(i + 2))
  }

  return dfs()
}

const robTab = houses => {
  if (houses.length === 0) return 0

  if (houses.length === 1) return houses[0]

  if (houses.length === 1) return Math.max(houses[0], houses[1])

  const dp = Array.from({ length: houses.length })

  // The maximum amount you can rob at this position is the amount itself!
  dp[0] = houses[0]
  dp[1] = Math.max(houses[0], houses[1])

  for (let i = 2; i < dp.length; i++) {
    // We're asking the question, which is greater, the house that we're on plus the other house
    // or the house right next to me?
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i])
  }

  return dp[houses.length - 1]
}

module.exports = {
  rob,
  robTab,
}
