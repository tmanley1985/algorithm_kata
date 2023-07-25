const suggestedProducts = function (products, searchWord) {
  // We're going to sort the products lexicographically so that the trie
  // has the lexicographic ordering.
  products.sort()
  const trie = new Trie()
  trie.addWords(products)

  let results = []

  // We're simulating a person typing into an input one character at a time.
  // So we start with an empty word and for each letter we'll push on the words
  // that we suggest for that prefix.
  let prefix = ""
  for (const letter of searchWord) {
    prefix += letter
    results.push(trie.getWordsStartingWith(prefix))
  }

  return results
}

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

  // We're using letters here to add to the trie, but we could actually
  // get the character code and store that instead, that would make it possible
  // to get the next lexicographical element because we could start at 'a' and move through
  // 'z' when looking at the next possible letters after the prefix in the trie.
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

  // Big idea here:
  // We want to take the prefix and find the node of that last character.
  // Then from that node, we're simply going to run dfs and build up all the
  // words by adding the characters one at a time to the initial prefix.
  // So if the prefix is 'ban' and the next child is 'g' we'd get bang and that's a word
  // so we'd add it to the outer array.
  // We stop when the outer array is three elements long.
  getWordsStartingWith(prefix) {
    let current = this.head
    let results = []

    for (const letter of prefix) {
      if (!(letter in current.children)) return results

      current = current.children[letter]
    }

    // We have to pass the word we're building up, because we want to know the word
    // to push onto the results. The easiest way to do that is to keep the word as we build it.
    // Otherwise we'd have to keep the starting node the path we took to get to the current node.
    // The secret is that: THE WORD IS THE PATH.
    const dfs = (node, word) => {
      // Per the problem, we only want to return the first three
      // results per prefix.
      if (results.length === 3) return

      if (node.isWord) {
        results.push(word)
      }

      // This is a standard dfs action here but it may not look like it.
      // Remember, in dfs we recurse on the children. The way that you get
      // the children in a trie is looking at the keys in the dictionary it holds.
      for (const letter in node.children) {
        dfs(node.children[letter], word + letter)
      }
    }

    dfs(current, prefix)

    return results
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
}

module.exports = {
  suggestedProducts,
}
