
const wordBreak = (s, wordDict) => {

    const dfs = (i = 0) => {

        if (i === s.length) return true

        let result = false

        for (let j = i; j < s.length; j++) {
            
            //substring UP TO i!
            const substring = s.substring(i, j + 1)

            if (wordDict.includes(substring)) {
                result = result || dfs(j + 1)
            }
            
        }
        return result

    }

    return dfs()
}

const log = console.log

log(wordBreak("codeleet", ["leet", "code"])) // true
log(wordBreak("applepenapple", ["apple", "pen"])) // true
log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])) // false