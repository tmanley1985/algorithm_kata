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

    const dfs = (row, column, letterIndex = 0) => {

        // The letter of the word that we're on is the same length of the word
        const reachedTheLastLetterInWord = letterIndex === word.length
        const seenKey = row + ',' + column

        if (reachedTheLastLetterInWord) return true

        // Out of bounds
        const outOfBounds = row < 0 || column < 0 || row >= NUMROWS || column >= NUMCOLS
        // doesn't meet the constraints of the problem

        if (outOfBounds || word[letterIndex] !== board[row][column]) return false

        if (seen.has(seenKey)) return false

        // Explore

        seen.add(seenKey)

        const up = dfs(row - 1, column, letterIndex + 1)
        const down = dfs(row + 1, column, letterIndex + 1)
        const left = dfs(row, column - 1, letterIndex + 1)
        const right = dfs(row, column + 1, letterIndex + 1)

        seen.delete(seenKey)

        return up || down || left || right
    }

    // Perform dfs on all the nodes

    for (let row = 0; row < NUMROWS; row++) {
        
        for (let col = 0; col < NUMCOLS; col++) {
            if (dfs(row, col, 0)) return true
        }
    }

    return false
}

const board =  [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]]

console.log(exists(board, "ABCCE"))


