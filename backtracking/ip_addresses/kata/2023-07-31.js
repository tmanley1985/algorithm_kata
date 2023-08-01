const restoreIPAddresses = s => {
  let addresses = []

  const dfs = (i = 0, dots = 0, candidateIP = "") => {
    if (dots === 4 && i === s.length) {
      addresses.push(candidateIP.substring(0, candidateIP.length - 1))
      return
    }

    for (let j = i; j < s.length; j++) {
      const octet = s.substring(i, j + 1)

      const doesNotContainLeadingZeros = i === j || octet[0] > 0
      const withinRange = i === j || octet < 256

      if (doesNotContainLeadingZeros && withinRange) {
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
