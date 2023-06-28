const rodCuttingRecursive = (prices, length) => {
  if (length <= 0) return 0

  let maxRevenue = 0

  // If you had a version of this problem where the input array assumed 1 based indexing,
  // you could start at zero here but you'd need to add one to i before subtracting it from
  // the length.
  for (let i = 1; i <= length; i++) {
    maxRevenue = Math.max(
      maxRevenue,
      prices[i] + rodCuttingRecursive(prices, length - i)
    )
  }

  return maxRevenue
}

const rodCuttingMemo = (prices, length) => {
  const memo = {}

  const dfs = n => {
    if (n in memo) return memo[n]
    if (n <= 0) return 0

    let maxRevenue = 0

    // If you had a version of this problem where the input array assumed 1 based indexing,
    // you could start at zero here but you'd need to add one to i before subtracting it from
    // the length.
    for (let i = 1; i <= n; i++) {
      maxRevenue = Math.max(
        maxRevenue,
        prices[i] + rodCuttingRecursive(prices, n - i)
      )
    }

    memo[n] = maxRevenue
    return maxRevenue
  }

  return dfs(length)
}

module.exports = {
  rodCuttingRecursive,
  rodCuttingMemo,
}
