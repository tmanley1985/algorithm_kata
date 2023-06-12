// https://leetcode.com/problems/word-search/

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

//The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input: board = [
// ["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]]
// 
// Word = "ABCCED"
// Output: true

const exists = (board, word) => {

    const NUM_ROWS = board.length
    const NUM_COLS = board[0].length
    const seen = new Set()
 
    const dfs = (row, column, currentWordIndex) => {
        // Base Cases
        const seenKey = `${row},${column}`
        const outOfBounds = row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS

        if (outOfBounds) return false

        const currentLetterInGridMatchesCurrentLetterInWord = word[currentWordIndex] === word[row][column]

        if (seen.has(seenKey) || !currentLetterInGridMatchesCurrentLetterInWord) return false 

        if (currentLetterInGridMatchesCurrentLetterInWord) return true 

        // Exploration

        seen.add(seenKey)

        const nextWordIndex = currentWordIndex + 1
        const up = dfs(row - 1, column, nextWordIndex)
        const down = dfs(row + 1, column, nextWordIndex)
        const left = dfs(row, column - 1, nextWordIndex)
        const right = dfs(row, column + 1, nextWordIndex)

        seen.delete(seenKey)

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
    ["A","D","E","E"]]
    
    const word = "ABCCED"
    
    console.log(exists(board, word))