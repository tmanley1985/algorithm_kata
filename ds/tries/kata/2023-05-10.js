

const TrieNode = (children = {}, isWord = false) => ({
    children,
    isWord,
    addWord(word) {
        // add a node for each letter
        let current = this
        for (let letter of word) {

            if (! (letter in current.children)) {
                current.children[letter] = TrieNode()
            }
            current = current.children[letter]
        }

        current.isWord = true
    }
})


const log = console.log

let trie = TrieNode()
trie.addWord("hello")

log(trie)
