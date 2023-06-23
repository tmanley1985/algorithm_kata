const decodeWays = str => {
  const dfs = (i = 0) => {
    if (i === str.length) return 1

    let num = 0

    for (let j = i; j < Math.min(i + 2, str.length); j++) {
      const chars = str.substring(i, j + 1)

      const len = chars.length

      if ((len === 1 && chars > 0) || (chars[0] > 0 && chars < 27)) {
        num += dfs(j + 1)
      }
    }

    return num
  }

  return dfs()
}

module.exports = {
  decodeWays,
}
