const wordBreak = (s, wordDict) => {
  const dfs = (i = 0) => {
    if (i === s.length) return true

    let result = false

    for (let j = i; j < s.length; j++) {
      const prefix = s.substring(i, j + 1)

      if (wordDict.includes(prefix)) {
        result = result || dfs(j + 1)
      }
    }

    return result
  }

  return dfs()
}

module.exports = {
  wordBreak,
}
