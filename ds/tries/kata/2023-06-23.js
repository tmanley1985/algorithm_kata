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
  search(word) {
    let current = this

    for (const letter of word) {
      if (!(letter in current.children)) return false

      current = current.children[letter]
    }

    return current.isWord
  },
})

module.exports = {
  TrieNode,
}
