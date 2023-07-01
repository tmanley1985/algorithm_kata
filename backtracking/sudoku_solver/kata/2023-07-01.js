const solve = board => {
  const rowSeen = initSeen()
  const columnSeen = initSeen()
  const boxSeen = initSeen()

  fillSeen(board, rowSeen, columnSeen, boxSeen)

  // This dfs will be different in that
  // when we explore, we will do so in a very linear way.
  // The child nodes are essentially the next column and the next
  // column may happen to be the beginning column in the next row
  // which is why we have to 'jump' rows if the column gets out of bounds.
  const dfs = (row, column) => {
    const NUM_ROWS = board.length
    const NUM_COLS = board[0].length

    if (row >= NUM_ROWS) return true

    // If we've moved past the end of the columns,
    // we should move up a row and reset the column to 0
    if (column >= NUM_COLS) return dfs(row + 1, 0)

    if (board[row][column] !== ".") return dfs(row, column + 1)

    // We have to try every number between 1 and 9 inclusive for any
    // given row and column
    for (let candidate = 1; candidate < 10; candidate++) {
      // If the candidate has been seen in any of our sets it can't be used so we should
      // try another
      if (
        rowSeen[row].has(candidate) ||
        columnSeen[column].has(candidate) ||
        boxSeen[getBoxIndex(row, column)].has(candidate)
      )
        continue

      // We're going to add the candidate to the to the seen sets
      // and this is us 'trying' to see if it's a good candidate.
      rowSeen[row].add(candidate)
      columnSeen[column].add(candidate)
      boxSeen[getBoxIndex(row, column)].add(candidate)

      // We have to store the candidate as a string because
      // remember, we are comparing this mutated board to an output
      // board and those cells contain strings. It doesn't matter
      // what you store in the seen sets though!
      board[row][column] = candidate.toString()

      if (dfs(row, column + 1)) return true

      rowSeen[row].delete(candidate)
      columnSeen[column].delete(candidate)
      boxSeen[getBoxIndex(row, column)].delete(candidate)

      board[row][column] = "."
    }

    return false
  }

  return dfs(0, 0)
}

const initSeen = () => Array.from({ length: 9 }).map(_ => new Set())

const fillSeen = (board, rowSeen, columnSeen, boxSeen) => {
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      let val = board[row][column]
      if (val === ".") continue

      // The row and columns are going to be number, so we'll store
      // numbers here. We could stringify them and store them in the sets
      // like that but this is just easier!
      val = parseInt(val)
      rowSeen[row].add(val)
      columnSeen[column].add(val)
      boxSeen[getBoxIndex(row, column)].add(val)
    }
  }
}

// We have to flatten a two dimensional grid into a one dimensional grid here.
// There is a generalized trick to do this:
// index = indices[0] * (size of dimension 1) + indices[1] * (size of dimension 2) + ... + indices[n-1] * (size of dimension n)
// But we have 9 3x3 boxes. We want to know for any position in the grid, which box is it in?
const getBoxIndex = (row, column) =>
  Math.floor(row / 3) * 3 + Math.floor(column / 3)

module.exports = {
  solve,
}
