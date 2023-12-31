const TrieNode = (children = {}, isWord = false) => ({
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

    // is word?
    if (currentNode.isWord) {
      results.add(wordCandidate)
      return
    }

    // out of bounds
    if (row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS) return

    const char = board[row][column]

    // bad candidate?
    if (!(char in currentNode.children)) return

    // seen?
    if (seen.has(seenKey)) return

    seen.add(seenKey)

    wordCandidate = `${wordCandidate}${char}`
    currentNode = currentNode.children[char]

    dfs(row - 1, column, currentNode, wordCandidate)
    dfs(row + 1, column, currentNode, wordCandidate)
    dfs(row, column - 1, currentNode, wordCandidate)
    dfs(row, column + 1, currentNode, wordCandidate)

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
