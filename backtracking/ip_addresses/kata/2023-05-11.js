const restoreIPAddresses = str => {
  const results = []

  const dfs = (i = 0, dots = 0, currentIP = "") => {
    if (dots === 4 && i === str.length) {
      results.push(currentIP.substring(0, currentIP.length - 1))
      return
    }

    for (let j = i; j < Math.min(i + 3, str.length); j++) {
      const octet = str.substring(i, j + 1)

      const doesNotContainLeadingZeros = i === j || octet[0] !== "0"

      if (doesNotContainLeadingZeros && octet < 256) {
        dfs(j + 1, dots + 1, `${currentIP}${octet}.`)
      }
    }
  }

  dfs()

  return results
}

module.exports = {
  restoreIPAddresses,
}
