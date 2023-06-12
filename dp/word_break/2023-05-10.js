
const TrieNode = (children = {}, isWord = false) => ({
    children,
    isWord,
    addWord(word) {

        let current = this

        for (let letter of word) {
            
            if (! (letter in current.children)) {
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

const wordBreak = (s, wordDict) => {
    const dfs = (i = 0) => {
        if (i === s.length) return true

        let result = false

        // So basically what we're doing here is trying
        // to start from the character we're on and building up a prefix
        // if we get a valid one: leet, then we're going to start dfs again
        // at the next index after the t in leet.
        for (let j = i; j <= s.length; j++) {
            
            const candidate = s.substring(i, j + 1)

            const valid = wordDict.includes(candidate)

            if (valid) {
                result = result || dfs(j + 1)
            }
            
        }

        return result
    }

    return dfs()
}

const log = console.log

log(wordBreak("leetcode", ["leet", "code"])) // true

const wordBreakWithTrie = (s, words) => {

    const trie = TrieNode()
    trie.addWords(words)

    const dfs = (head, word, i) => {

       if (! head) return false

       for (let j = i; j < s.length; j++) {
        const element = array[j];
        
       }

    }

   
    return dfs(trie, s, 0)
}

log(wordBreakWithTrie("codeleet", ["leet", "code"]))