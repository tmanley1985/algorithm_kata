const wordBreak = (word, words) => {
  const dfs = (i = 0) => {
    if (i === word.length) return true

    let result = false

    for (let j = i; j <= word.length; j++) {
      const candidate = word.substring(i, j + 1)

      const valid = words.includes(candidate)

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
