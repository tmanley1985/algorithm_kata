const restoreIPAddresses = s => {
  const results = []

  const dfs = (i = 0, dots = 0, candidate = "") => {
    // happy path

    if (dots === 4 && i === s.length) {
      results.push(candidate.substring(0, candidate.length - 1))
      return
    }

    for (let j = i; j < Math.min(i + 3, s.length); j++) {
      const octet = s.substring(i, j + 1)

      const withinRange = octet < 256

      // This means if i and j are the same then we're dealing with a single character
      const doesNotContainLeadingZeros = i === j || octet[0] > 0

      if (withinRange && doesNotContainLeadingZeros) {
        dfs(j + 1, dots + 1, `${candidate}${octet}.`)
      }
    }
  }

  dfs()
  return results
}

module.exports = {
  restoreIPAddresses,
}
