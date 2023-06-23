const wordBreak = (s, wordDict) => {
  const dfs = (i = 0) => {
    if (i === s.length) return true

    let result = false

    // So basically what we're doing here is trying
    // to start from the character we're on and building up a prefix
    // if we get a valid one: leet, then we're going to start dfs again
    // at the next index after the t in leet.
    for (let j = i; j <= s.length; j++) {
      const candidate = s.substring(i, j + 1)

      const valid = wordDict.includes(candidate)

      if (valid) {
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
