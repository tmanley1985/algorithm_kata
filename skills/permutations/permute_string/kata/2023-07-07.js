const permute = s => {
  const chars = Array.from(s)

  const permutations = []

  const dfs = (i = 0) => {
    if (i === s.length - 1) {
      permutations.push(chars.join(""))
      return
    }

    for (let j = i; j < chars.length; j++) {
      ;[chars[i], chars[j]] = [chars[j], chars[i]]

      dfs(i + 1)
      ;[chars[i], chars[j]] = [chars[j], chars[i]]
    }
  }

  dfs()
  return permutations
}

module.exports = {
  permute,
}
