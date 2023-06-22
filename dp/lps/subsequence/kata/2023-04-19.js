const reverse = str => str.split("").reverse().join("")

// You can use LCS on LPS if you reverse the word.

const LPS_using_LCS = word => {
  let reversed = reverse(word)

  // This will represent the characters of the reversed string
  const NUM_ROWS = word.length + 1
  // This will represent the characters of the word
  const NUM_COLS = word.length + 1

  const dp = Array.from({ length: NUM_ROWS }).map(_ =>
    Array.from({ length: NUM_COLS }).fill(0)
  )

  for (let row = 1; row < NUM_ROWS; row++) {
    for (let column = 1; column < NUM_COLS; column++) {
      // is there a match?
      if (word[column] === reversed[row]) {
        dp[row][column] = dp[row - 1][column - 1] + 1
        continue
      }

      dp[row][column] = Math.max(dp[row - 1][column], dp[row][column - 1])
    }
  }

  return dp[word.length][word.length]
}

module.exports = {
  LPS_using_LCS,
}
