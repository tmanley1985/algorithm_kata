const rob = houses => {
  const dfs = (i = 0) => {
    if (i >= houses.length) return 0

    return Math.max(houses[i] + dfs(i + 2), dfs(i + 1))
  }

  return dfs()
}

const robTab = houses => {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]
  if (houses.length === 2) return Math.max(houses[0], houses[1])

  const dp = Array.from({ length: houses.length }).fill(0)

  dp[0] = houses[0]
  dp[1] = Math.max(houses[0], houses[1])

  for (let i = 2; i < houses.length; i++) {
    dp[i] = Math.max(houses[i] + dp[i - 2], dp[i - 1])
  }

  return dp[houses.length - 1]
}

module.exports = {
  rob,
  robTab,
}
