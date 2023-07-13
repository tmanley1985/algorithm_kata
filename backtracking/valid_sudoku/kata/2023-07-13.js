const isValid = board => {
  const rowSeen = Array.from({ length: 9 }).map(_ => new Set())
  const columnSeen = Array.from({ length: 9 }).map(_ => new Set())
  const boxSeen = Array.from({ length: 9 }).map(_ => new Set())

  const getBoxIndex = (row, column) =>
    Math.floor(row / 3) * 3 + Math.floor(column / 3)

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      const cell = board[row][column]

      if (cell === ".") continue

      if (
        rowSeen[row].has(cell) ||
        columnSeen[column].has(cell) ||
        boxSeen[getBoxIndex(row, column)].has(cell)
      )
        return false

      rowSeen[row].add(cell)
      columnSeen[column].add(cell)
      boxSeen[getBoxIndex(row, column)].add(cell)
    }
  }

  return true
}

module.exports = {
  isValid,
}
