const wordBreak = (s, wordDict) => {
    const dfs = (i = 0) => {
        if (i === s.length) {
            return true
        }

        let result = false

        // Find the candidates.
        // Notice how we start j with i? Then we'd just try the whole string after the prefix.
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