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

  addWord(word) {
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
      this.addWord(word)
    }
  }

  search(word) {
    let current = this.head

    for (const letter of word) {
      if (!(letter in current.children)) return false

      current = current.children[letter]
    }
    return current.isWord
  }

  startsWith(prefix) {
    let current = this.head

    for (const letter of prefix) {
      if (!(letter in current.children)) return false

      current = current.children[letter]
    }

    return true
  }

  getWordsStartingWith(prefix) {
    let current = this.head
    let results = []

    for (const letter of prefix) {
      if (!(letter in current.children)) return results

      current = current.children[letter]
    }

    const dfs = (node, word) => {
      if (results.length === 3) return

      if (node.isWord) {
        results.push(word)
      }

      for (const letter in node.children) {
        dfs(node.children[letter], word + letter)
      }
    }

    dfs(current, prefix)

    return results
  }
}

const suggestedProducts = (products, searchTerm) => {
  products.sort()
  const trie = new Trie()
  trie.addWords(products)

  let suggested = []

  let prefix = ""
  for (const letter of searchTerm) {
    prefix += letter
    suggested.push(trie.getWordsStartingWith(prefix))
  }

  return suggested
}

module.exports = {
  suggestedProducts,
}
