const editDistanceRecursive = (wordOne, wordTwo) => {
  const dfs = (i = 0, j = 0) => {
    // Why do we return wordTwo.length - j?
    // Well think about if both wordOne and wordTwo was 'a'.
    // After the first iteration, you'd arrive at the base case.
    // i === 1 which is the length of the string.
    // but j === 1 as well. So wordTwo.length would be 1.
    // 1 - 1 === 0 which is exactly the minimum number of steps
    // you could take to turn 'a' into 'a'!
    if (i === wordOne.length) return wordTwo.length - j
    if (j === wordTwo.length) return wordOne.length - i

    // Notice how we're not doing: return 1 + dfs(i + 1, j + 1)?
    // Why is that? Well think about it, if both characters match
    // there's no operation to do here.
    // An extreme case is if you had wordOne = a and wordTwo = a.
    // The minimum number of steps is zero.
    if (wordOne[i] === wordTwo[j]) return dfs(i + 1, j + 1)

    const substitution = dfs(i + 1, j + 1)
    const deletion = dfs(i + 1, j)
    const insertion = dfs(i, j + 1)

    return 1 + Math.min(substitution, deletion, insertion)
  }

  return dfs()
}

const editDistanceTab = (wordOne, wordTwo) => {
  const NUM_ROWS = wordOne.length + 1
  const NUM_COLS = wordTwo.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  // We're going to make the first row 0,1,2,...
  // The intuition here is that the zeroth row represents an empty string.
  // How many steps would it take to turn an empty string into a string of size 1?
  // Well that would be one operation. Insertion.
  // What about size 2? Well that would be two operations. So on and so forth.
  for (let i = 0; i < NUM_ROWS; i++) {
    dp[i][0] = i
  }

  // We're going to make the first column 0,1,2,...
  for (let i = 0; i < NUM_COLS; i++) {
    dp[0][i] = i
  }

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      // Why is this row minus one and column minus one? Well remember that the row here is representing
      // wordOne while the column represents wordTwo. BUT, we've added a row and a column for the empty string
      // case. So that means that we'll be off by one.
      if (wordOne[row - 1] === wordTwo[column - 1]) {
        // Think about in the case that:
        // wordOne = 'a' and wordTwo = 'a'
        // It takes no operations to change this
        // when row and column are both 1, this
        // is like saying, don't count this operation
        // just look to the previous operation one letter
        // back for each word (remember the rows represent wordOne letters and columns are wordTwo letters)
        dp[row][column] = dp[row - 1][column - 1]
        continue
      }

      dp[row][column] =
        1 +
        Math.min(
          dp[row - 1][column - 1],
          dp[row - 1][column],
          dp[row][column - 1]
        )
    }
  }

  return dp[wordOne.length][wordTwo.length]
}

module.exports = {
  editDistanceRecursive,
  editDistanceTab,
}
