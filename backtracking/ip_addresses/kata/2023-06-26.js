const restoreIPAddresses = s => {
  const addresses = []
  const dfs = (i = 0, dots = 0, candidate = "") => {
    if (i === s.length && dots === 4) {
      addresses.push(candidate.substring(0, candidate.length - 1))
      return
    }

    for (let j = i; j < Math.min(i + 3, s.length); j++) {
      const octet = s.substring(i, j + 1)

      const withinRange = octet < 256
      const doesNotContainLeadingZeros = i === j || octet[0] > 0

      if (withinRange && doesNotContainLeadingZeros) {
        dfs(j + 1, dots + 1, `${candidate}${octet}.`)
      }
    }
  }

  dfs()
  return addresses
}

module.exports = {
  restoreIPAddresses,
}
