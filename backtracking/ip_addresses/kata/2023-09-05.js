const ipAddresses = s => {
  const ips = []

  const dfs = (i = 0, dots = 0, candidateIp = "") => {
    if (i === s.length && dots === 4) {
      ips.push(candidateIp.substring(0, candidateIp.length - 1))
      return
    }

    for (let j = i; j < s.length; j++) {
      const octet = s.substring(i, j + 1)

      const doesNotContainLeadingZeros = i === j || octet[0] > 0
      const withinRange = i === j || octet < 256

      if (doesNotContainLeadingZeros && withinRange) {
        dfs(j + 1, dots + 1, `${candidateIp}${octet}.`)
      }
    }
  }

  dfs()

  return ips
}

module.exports = {
  ipAddresses,
}
