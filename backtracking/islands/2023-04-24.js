
const numIslands = grid => {

    const NUM_ROWS = grid.length
    const NUM_COLS = grid[0].length

    const seen = new Set()

    const dfs = (row, column) => {

        const seenKey = `${row},${column}`

        // out of bounds or if it's been seen don't go any further

        if (row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS) return 0

        if (seen.has(seenKey)) return 0

        if (grid[row][column] === '0') return 0

        // explore

        seen.add(seenKey)

        const up = dfs(row - 1, column)
        const down = dfs(row + 1, column)
        const left = dfs(row, column - 1)
        const right = dfs(row, column + 1)

        // This is interesting, there's a pattern here that's unnamed. But you're effectively
        // starting in a place and you're really ignoring all the other return values because
        // it doesn't really matter. From the start of the island, you just want to see if it's an island.
        // You couldn't add up all the values because that would be more than one. So the first place that you
        // start at will return 1.
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
