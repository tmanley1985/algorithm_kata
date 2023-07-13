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
  },
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

    if (row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS) return

    if (seen.has(seenKey)) return

    let char = board[row][column]

    if (!(char in currentNode.children)) return

    seen.add(seenKey)

    // Here's the one thing that makes this different from normal word search.
    // Obviously we're using a trie.
    // But why also have the prefix being passed in?
    // Well as you try new characters, you want to see if they're a child of the current node right?
    // If the current character in the board isn't a child of the node you're on, you cannot make a
    // any words with that. Fine. But if it is a child it means you can make a word.
    // The prefix or the word candidate you're trying has to be passed in because as you traverse the trie
    // you need to remember the path you took in order to form the word in the trie. But that's messy.
    // Instead: THE WORD CANDIDATE ITSELF IS THE PATH.
    // So when you go to push onto the array, you don't have to find out what original node you started on
    // and retraverse the trie. You've kept track of the word you've been building.
    let next = currentNode.children[char]
    let newPrefix = prefix + char

    if (next.isWord) {
      result.add(newPrefix)
    }

    // Explore

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

module.exports = {
  findWords,
}
