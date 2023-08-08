const decodeWays = s => {
  const dfs = (i = 0) => {
    if (i === s.length) return 1

    let numWays = 0

    for (let j = i; j < Math.min(i + 2, s.length); j++) {
      const prefix = s.slice(i, j + 1)
      const isValid =
        (i === j && prefix[0] > 0) || (prefix[0] > 0 && prefix < 27)

      if (isValid) {
        numWays += dfs(j + 1)
      }
    }

    return numWays
  }

  return dfs()
}

module.exports = {
  decodeWays,
}
