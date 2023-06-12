
const exists = (board, word) => {

    const NUM_ROWS = board.length 
    const NUM_COLS = board[0].length

    const seen = new Set()

    const dfs = (row, column, currentWordIndex) => {

        const seenKey = `${row},${column}`
        // Base Case
        if (currentWordIndex === word.length) return true

        // Out Of Bounds

        const outOfBounds = row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS

        if (outOfBounds) return false

        const letterCandidate = board[row][column]
        const letterWeAreOn = word[currentWordIndex]

        if (letterCandidate !== letterWeAreOn) return false

        if (seen.has(seenKey)) return false


        seen.add(seenKey)

        // Explore

        const up = dfs(row - 1, column, currentWordIndex + 1)
        const down = dfs(row + 1, column, currentWordIndex + 1)
        const left = dfs(row, column - 1, currentWordIndex + 1)
        const right = dfs(row, column + 1, currentWordIndex + 1)

        seen.delete(seenKey)
        // Return

        return up || down || left || right
    }


    for (let row = 0; row < NUM_ROWS; row++) {
        for (let column = 0; column < NUM_COLS; column++) {
           
            if (dfs(row, column, 0)) return true
            
        }
        
    }

    return false
}

const b = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
    
const w = "ABCCED"

console.log(exists(b, w))