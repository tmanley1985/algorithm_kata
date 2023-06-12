
const exists = (board, word) => {

    const NUM_ROWS = board.length
    const NUM_COLS = board[0].length

    const seen = new Set()

    const dfs = (row, column, currentWordIndex) => {

        const seenKey = `${row},${column}`

        if (currentWordIndex === word.length) return true 

        // out of bounds

        const outOfBounds = row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS

        if (outOfBounds) return false
        
        // Does the candidate match the letter we're on? Have we seen it?
        if (seen.has(seenKey) || board[row][column] !== word[currentWordIndex]) return false


        // explore

        seen.add(seenKey)

        const up = dfs(row - 1, column, currentWordIndex + 1)
        const down = dfs(row + 1, column, currentWordIndex + 1)
        const left = dfs(row, column - 1, currentWordIndex + 1)
        const right = dfs(row, column + 1, currentWordIndex + 1)

        seen.delete(seenKey)

        // return

        return up || down || left || right

    }

    for (let row = 0; row < NUM_ROWS; row++) {
        
        for (let column = 0; column < NUM_COLS; column++) {
           
            if (dfs(row, column, 0)) return true
            
        }
    }

    return false
}

const board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
    
const badWord = "ZEEP"

const word = "ABCCED"

const log = console.log 


log(exists(board, word)) // TRUE
log(exists(board, badWord)) // FALSE