
const TrieNode = (children = {}, isWord = false) => ({
    children,
    isWord,
    addWord(word) {
        let current = this 

        for (let letter of word) {

            if (!(letter in current.children)) {
                current.children[letter] = TrieNode()
            }
            current = current.children[letter]
        }

        current.isWord = true
    },
    addWords(words) {
        
        for (let word of words) {
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
    const result = new Set()


    const dfs = (row, column, currentNode, prefix) => {

        const seenKey = `${row},${column}`
        console.log(seenKey)

        if (row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS) return

        if (seen.has(seenKey)) return

        let char = board[row][column]

        if (! (char in currentNode.children)) return 

        seen.add(seenKey)

        let next = currentNode.children[char]
        let newPrefix = prefix + char

        if (next.isWord) {
            result.add(newPrefix)
        }

        dfs(row - 1, column, next, newPrefix)
        dfs(row + 1, column, next, newPrefix)
        dfs(row, column - 1, next, newPrefix)
        dfs(row, column + 1, next, newPrefix)

        seen.delete(seenKey)
    }

    for (let row = 0; row < NUM_ROWS; row++) {
        
        for (let column = 0; column < NUM_COLS; column++) {
            
            dfs(row, column, trie, "")
            
        }
    }

    return [...result]
}

const log = console.log

const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
const words = ["oath","pea","eat","rain"]

log(findWords(board, words)) // [eat, oath]