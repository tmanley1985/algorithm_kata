
const TrieNode = (children = {}, isWord = false) => ({
    isWord,
    children,
    addWord(word) {
        let current = this 

        for (const letter of word) {
            
            if (! (letter in current.children)) {
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

const log = console.log

let trie = TrieNode()
trie.addWord("hello")

log(JSON.stringify(trie))