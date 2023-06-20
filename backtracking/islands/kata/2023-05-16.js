
const numIslands = grid => {
    const NUM_ROWS = grid.length
    const NUM_COLS = grid[0].length

    const seen = new Set()

    const dfs = (row, column) => {

        const seenKey = `${row},${column}`

        // out of bounds

        if (row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS) return 0

        // seen?

        if (seen.has(seenKey)) return 0

        // bad candidate

        if (grid[row][column] === '0') return 0

        // mark as seen

        seen.add(seenKey)

        // explore

        dfs(row - 1, column)
        dfs(row + 1, column)
        dfs(row, column - 1)
        dfs(row, column + 1)

        return 1
    }

    let num = 0
    for (let row = 0; row < NUM_ROWS; row++) {
        
        for (let column = 0; column < NUM_COLS; column++) {
            
            if (grid[row][column] === '1') {
                num += dfs(row, column)
            }
        }
        
    }

    return num
}

const gridWithOne = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]] // 1
const gridWithThree = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]] // 3

const log = console.log 

log(numIslands(gridWithOne)) // 1
log(numIslands(gridWithThree)) // 3