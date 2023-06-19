const exists = (board, word) => {
  const NUM_ROWS = board.length
  const NUM_COLS = board[0].length

  const seen = new Set()

  const findPath = (row, column, currentWordIndex) => {
    const seenKey = row + "," + column

    // Happy Case
    if (currentWordIndex === word.length) return true

    // Out of Bound

    const outOfBounds =
      row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS

    if (outOfBounds) return false

    const currentLetterOfWord = word[currentWordIndex]
    const currentLetterCandidate = board[row][column]

    // Current letter of word does not match letter we are on in the grid
    if (currentLetterCandidate !== currentLetterOfWord) return false

    // If we have already seen this cell, we don't want to try it again
    if (seen.has(seenKey)) return false

    // Explore

    seen.add(seenKey)

    const up = findPath(row - 1, column, currentWordIndex + 1)
    const down = findPath(row + 1, column, currentWordIndex + 1)
    const left = findPath(row, column - 1, currentWordIndex + 1)
    const right = findPath(row, column + 1, currentWordIndex + 1)

    seen.delete(seenKey)

    return up || down || left || right
  }

  // Go through the grid and see if there is a path

  for (let row = 0; row < NUM_ROWS; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      if (findPath(row, column, 0)) return true
    }
  }

  return false
}

module.exports = {
  exists,
}
