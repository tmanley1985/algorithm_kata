class TrieNode {
  constructor(children = {}, isWord = false) {
    this.children = children
    this.isWord = isWord
  }
}

class Trie {
  constructor() {
    this.head = new TrieNode()
  }

  add(word) {
    let current = this.head

    for (const letter of word) {
      if (!(letter in current.children)) {
        current.children[letter] = new TrieNode()
      }

      current = current.children[letter]
    }

    current.isWord = true
  }

  addWords(words) {
    for (const word of words) {
      this.add(word)
    }
  }
}

const solve = (board, words) => {
  const trie = new Trie()
  trie.addWords(words)

  const NUM_ROWS = board.length
  const NUM_COLS = board[0].length

  const seen = new Set()
  const results = new Set()

  const dfs = (row, column, node, wordCandidate) => {
    const seenKey = `${row},${column}`

    if (node.isWord) {
      results.add(wordCandidate)
      return
    }

    if (row < 0 || column < 0 || row >= NUM_ROWS || column >= NUM_COLS) return

    if (seen.has(seenKey)) return

    const char = board[row][column]

    if (!(char in node.children)) return

    seen.add(seenKey)

    const newCandidate = wordCandidate + char
    const nextNode = node.children[char]

    dfs(row - 1, column, nextNode, newCandidate)
    dfs(row + 1, column, nextNode, newCandidate)
    dfs(row, column - 1, nextNode, newCandidate)
    dfs(row, column + 1, nextNode, newCandidate)

    seen.delete(seenKey)
  }

  for (let row = 0; row < NUM_ROWS; row++) {
    for (let column = 0; column < NUM_COLS; column++) {
      dfs(row, column, trie.head, "")
    }
  }

  return [...results]
}

module.exports = {
  solve,
}
