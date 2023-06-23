function permuteString(string) {
  const chars = Array.from(string)

  // Array to store the permutations
  const permutations = []

  const dfs = (i = 0) => {
    if (i === chars.length - 1) {
      // Reached the end of the array, convert it back to a string and add to the permutations array
      permutations.push(chars.join(""))
      return
    }
    for (let j = i; j < chars.length; j++) {
      // Swap characters
      ;[chars[i], chars[j]] = [chars[j], chars[i]]

      // Recursively generate permutations for the remaining characters
      dfs(i + 1)

      // Restore the original order by swapping back
      ;[chars[i], chars[j]] = [chars[j], chars[i]]
    }
  }

  // Start generating permutations from index 0
  dfs()

  return permutations
}

module.exports = {
  permuteString,
}
