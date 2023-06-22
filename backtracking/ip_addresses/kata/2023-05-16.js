const restoreIPAddresses = s => {
  const result = []

  const dfs = (i = 0, dots = 0, currentIP = "") => {
    if (dots === 4 && i === s.length) {
      result.push(currentIP.substring(0, currentIP.length - 1))
      return
    }

    for (let j = i; j < Math.min(i + 3, s.length); j++) {
      const octet = s.substring(i, j + 1)

      const withinRange = octet < 256
      const doesNotContainLeadingZeros = i === j || octet[0] > 0

      if (withinRange && doesNotContainLeadingZeros) {
        dfs(j + 1, dots + 1, `${currentIP}${octet}.`)
      }
    }
  }

  dfs()
  return result
}

module.exports = {
  restoreIPAddresses,
}
