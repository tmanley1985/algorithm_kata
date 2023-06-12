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

    const NUMROWS = board.length
    const NUMCOLS = board[0].length

    const seen = new Set()

    const dfs = (row, column, currentWordIndex) => {

        const reachedTheEnd = currentWordIndex === word.length
        const seenKey = row + ',' + column

        if (reachedTheEnd) return true 

        const outOfBounds = row < 0 || column < 0 || row >= NUMROWS || column >= NUMCOLS

        if (outOfBounds || word[currentWordIndex] !== board[row][column] || seen.has(seenKey)) return false

        // Explore

        seen.add(seenKey)

        const up = dfs(row - 1, column, currentWordIndex + 1)
        const down = dfs(row + 1, column, currentWordIndex + 1)
        const left = dfs(row, column - 1, currentWordIndex + 1)
        const right = dfs(row, column + 1, currentWordIndex + 1)

        seen.delete(seenKey)

        return up || down || left || right 
    }

    for (let row = 0; row < NUMROWS; row++) {
        
        for (let column = 0; column < NUMCOLS; column++) {
            
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