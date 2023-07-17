const restoreIPAddresses = s => {
  const addresses = []

  const dfs = (i = 0, dots = 0, candidateIP = "") => {
    if (i === s.length && dots === 4) {
      addresses.push(candidateIP.slice(0, candidateIP.length - 1))
      return
    }

    for (let j = i; j < s.length; j++) {
      const octet = s.slice(i, j + 1)

      const doesNotContainLeadingZeros = i === j || octet[0] > 0
      const isValid = i === j || octet < 256

      if (doesNotContainLeadingZeros && isValid) {
        dfs(j + 1, dots + 1, `${candidateIP}${octet}.`)
      }
    }
  }

  dfs()

  return addresses
}

module.exports = {
  restoreIPAddresses,
}
