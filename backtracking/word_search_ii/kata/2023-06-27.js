const TrieNode = (children = [], isWord = false) => ({
  children,
  isWord,
  addWord(word) {
    let current = this

    for (const letter of word) {
      if (!(letter in current.children)) {
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
  },
})

const findWords = (board, words) => {
  const NUM_ROWS = board.length
  const NUM_COLS = board[0].length

  const seen = new Set()
  const results = new Set()

  const trie = TrieNode()
  trie.addWords(words)

  const dfs = (row, column, currentNode, wordCandidate) => {
    const seenKey = `${row},${column}`

    if (currentNode.isWord) {
      results.add(wordCandidate)
      return
    }

    if (row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS) return

    if (seen.has(seenKey)) return

    const char = board[row][column]

    // If the current trie node doesn't have the current letter that we're on
    // in it's children, then there's no way to make any of the words.
    if (!(char in currentNode.children)) return

    seen.add(seenKey)

    // Since we've already used this character, we
    // need to get the node for that character and its
    // children will be the possible words we can try.
    const next = currentNode.children[char]
    const wordToTry = `${wordCandidate}${char}`

    dfs(row - 1, column, next, wordToTry)
    dfs(row + 1, column, next, wordToTry)
    dfs(row, column - 1, next, wordToTry)
    dfs(row, column + 1, next, wordToTry)

    seen.delete(seenKey)
  }

  for (let row = 0; row < NUM_ROWS; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      dfs(row, column, trie, "")
    }
  }
  return [...results]
}

module.exports = {
  findWords,
}
