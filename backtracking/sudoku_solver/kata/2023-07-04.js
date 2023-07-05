const solve = board => {
  const rowSeen = Array.from({ length: 9 }).map(_ => new Set())
  const columnSeen = Array.from({ length: 9 }).map(_ => new Set())
  const boxSeen = Array.from({ length: 9 }).map(_ => new Set())

  fillSeen(board, rowSeen, columnSeen, boxSeen)

  const dfs = (row, column) => {
    if (row >= 9) return true

    if (column >= 9) return dfs(row + 1, 0)

    const cell = board[row][column]

    if (cell !== ".") return dfs(row, column + 1)

    for (let candidate = 1; candidate <= 9; candidate++) {
      if (
        rowSeen[row].has(candidate) ||
        columnSeen[column].has(candidate) ||
        boxSeen[getBoxIndex(row, column)].has(candidate)
      )
        continue

      rowSeen[row].add(candidate)
      columnSeen[column].add(candidate)
      boxSeen[getBoxIndex(row, column)].add(candidate)

      board[row][column] = candidate.toString()

      if (dfs(row, column + 1)) return true

      rowSeen[row].delete(candidate)
      columnSeen[column].delete(candidate)
      boxSeen[getBoxIndex(row, column)].delete(candidate)

      board[row][column] = "."
    }
  }

  return dfs(0, 0)
}

const getBoxIndex = (row, column) =>
  Math.floor(row / 3) * 3 + Math.floor(column / 3)

const fillSeen = (board, rowSeen, columnSeen, boxSeen) => {
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      const cell = board[row][column]

      if (cell === ".") continue

      let val = parseInt(cell)
      rowSeen[row].add(val)
      columnSeen[column].add(val)
      boxSeen[getBoxIndex(row, column)].add(val)
    }
  }
}

module.exports = {
  solve,
}
