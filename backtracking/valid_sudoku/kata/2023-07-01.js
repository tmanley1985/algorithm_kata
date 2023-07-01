const solve = board => {
  // This problem only wants to see if the board given
  // is a valid starting board or not. Meaning, are there any
  // invalid cells. This is different than a sudoku solver.

  let rows = Array.from({ length: 9 }).map(_ => new Set())
  let columns = Array.from({ length: 9 }).map(_ => new Set())
  let boxes = Array.from({ length: 9 }).map(_ => new Set())

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let val = board[row][col]
      if (val === ".") continue
      let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)

      // Check if this value has already been seen before in the current row, column, or box.
      if (
        rows[row].has(val) ||
        columns[col].has(val) ||
        boxes[boxIndex].has(val)
      ) {
        return false
      }

      // If not, we can add it to our seen set.
      rows[row].add(val)
      columns[col].add(val)
      boxes[boxIndex].add(val)
    }
  }

  // If we made it through each cell without finding any duplicates, the Sudoku solution is valid.
  return true
}

module.exports = {
  solve,
}
