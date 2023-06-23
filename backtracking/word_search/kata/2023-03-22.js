const exists = (board, word) => {
  const num_rows = board.length
  const num_cols = board[0].length
  const path = new Set()

  const dfs = (row, column, currentIndexOfWord) => {
    const reachedTheLastLetterInWord = currentIndexOfWord === word.length
    const seenKey = `${row},${column}`

    if (reachedTheLastLetterInWord) return true

    // If we're out of bounds obviously this is false
    // If the letter we're trying (word[currentIndexOfWord]) isn't equal to row and column
    // we're looking at then it's obviously not part of the word.
    // Also if we've already seen this row/column combination return false.
    if (
      row < 0 ||
      column < 0 ||
      row >= num_rows ||
      column >= num_cols ||
      word[currentIndexOfWord] !== board[row][column] ||
      path.has(seenKey)
    )
      return false

    // We've reached a candidate! We haven't seen it, it's not out of bounds and it matches the current letter in the word we're on.

    path.add(seenKey)

    const up = dfs(row - 1, column, currentIndexOfWord + 1)
    const down = dfs(row + 1, column, currentIndexOfWord + 1)
    const left = dfs(row, column - 1, currentIndexOfWord + 1)
    const right = dfs(row, column + 1, currentIndexOfWord + 1)

    path.delete(seenKey)
    return up || down || left || right
  }

  for (let r = 0; r < num_rows; r++) {
    for (let c = 0; c < num_cols; c++) {
      if (dfs(r, c, 0)) return true
    }
  }

  return false
}

module.exports = {
  exists,
}
