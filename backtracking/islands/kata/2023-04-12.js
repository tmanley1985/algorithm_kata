const numIslandsWithSet = grid => {
  const NUM_ROWS = grid.length
  const NUM_COLS = grid[0].length

  const seen = new Set()

  const dfs = (row, column) => {
    const seenKey = `${row},${column}`
    const outOfBounds =
      row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS

    if (outOfBounds) return 0

    if (grid[row][column] === "0") return 0

    if (seen.has(seenKey)) return 0

    seen.add(seenKey)

    dfs(row - 1, column)
    dfs(row + 1, column)
    dfs(row, column - 1)
    dfs(row, column + 1)

    return 1
  }

  let numIslands = 0

  for (let row = 0; row < NUM_ROWS; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      if (grid[row][column] === "1") {
        numIslands += dfs(row, column)
      }
    }
  }

  return numIslands
}

const numIslands = grid => {
  const rows = grid.length
  const cols = grid[0].length

  let numOfIslands = 0

  const dfs = (i, j, grid) => {
    const [north, south, east, west] = [i - 1, i + 1, j + 1, j - 1]

    const outOfBounds =
      i < 0 || i >= grid.length || j < 0 || j >= grid[0].length

    if (outOfBounds || grid[i][j] === "0") return 0

    grid[i][j] = "0"

    dfs(north, j, grid)
    dfs(south, j, grid)
    dfs(i, east, grid)
    dfs(i, west, grid)

    return 1
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        numOfIslands += dfs(i, j, grid)
      }
    }
  }

  return numOfIslands
}

module.exports = {
  numIslandsWithSet,
  numIslands,
}
