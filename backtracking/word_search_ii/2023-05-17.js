
const TrieNode = (children= {}, isWord = false) => ({
    children,
    isWord,
    addWord(word) {
        let current = this

        for (const letter of word) {
            if (! ( letter in current.children)) {
                current.children[letter] = TrieNode()
            }

            current = current.children[letter]
        }
        current.isWord = true
    },
    addWords(words) {
        for (const word of words) {
            this.addWord(word)
        }
    }
})

const findWords = (board, words) => {

    const trie = TrieNode()
    trie.addWords(words)

    const NUM_ROWS = board.length
    const NUM_COLS = board[0].length

    const seen = new Set()
    const results = new Set()

    const dfs = (row, column, currentNode, wordCandidate) => {

        const seenKey = `${row},${column}`
        if (currentNode.isWord) {
            results.add(wordCandidate)
            return
        }

        // out of bounds

        if (row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS) return

        // seen?

        if (seen.has(seenKey)) return

        // bad candidate?

        const char = board[row][column]

        if (! (char in currentNode.children)) return

        // add to seen

        seen.add(seenKey)

        const newWordCandidate = `${wordCandidate}${char}`

        const next = currentNode.children[char]

        dfs(row - 1, column, next, newWordCandidate)
        dfs(row + 1, column, next, newWordCandidate)
        dfs(row, column - 1, next, newWordCandidate)
        dfs(row, column + 1, next, newWordCandidate)

        seen.delete(seenKey)

        // remove from seen
    }

    for (let row = 0; row < NUM_ROWS; row++) {
        
        for (let column = 0; column < NUM_COLS; column++) {
            
            dfs(row, column, trie, "")
            
        }
        
    }

    return [...results]
}

const log = console.log

const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
const words = ["oath","pea","eat","rain"]

log(findWords(board, words)) // [eat, oath]