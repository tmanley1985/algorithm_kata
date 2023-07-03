const wordBreakDP = (s, wordDict) => {
  if (wordDict === null || s.length === 0) return false

  // Using the set is more efficient than just using wordDict.includes(word)
  // because it has constant time look up.
  const seen = new Set(wordDict)

  const dp = Array.from({ length: s.length + 1 }).fill(false)

  // The beginning of the array represents the empty string case.
  // An empty string can always be formed.
  dp[0] = true

  // We do a double loop here but this one is a bit different.
  // The inner loop is checking all the characters BEFORE the outer loop.
  // This ensures that we get all the possible substrings.
  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const word = s.slice(start, end)

      // So think about this.
      // If dp[start] is true, then it means that the substring UP TO
      // the start pointer can be broken up into valid words.
      // If the set has the current substring from start to end it means
      // that it itself is a valid word. So that means that everything between
      // the start and the end can be broken into valid words.
      if (dp[start] === true && seen.has(word)) {
        dp[end] = true
        // We could continue here, but we break as an optimization.
        // Once we find a word up to the current end pointer, we do not
        // have to consider any other substrings up to that index.
        break
      }
    }
  }

  return dp[s.length]
}

const wordBreakRecursive = (s, wordDict) => {
  const seen = new Set(wordDict)

  const dfs = (i = 0) => {
    if (i === s.length) return true

    let result = false

    for (let j = i; j < s.length; j++) {
      const word = s.slice(i, j + 1)

      if (seen.has(word)) {
        result = result || dfs(i + 1)
      }
    }

    return result
  }

  return dfs()
}

module.exports = {
  wordBreakDP,
}
