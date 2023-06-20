

const LPS = (word) => {
    const dfs = (i, j, count) => {
      if (i >= word.length || j < 0) return count
  
      if (word[i] === word[j]) {

        return dfs(i + 1, j - 1, count + 1)
      }
  
      return Math.max(count, dfs(i + 1, j, 0), dfs(i, j - 1, 0))
    }
  
    return dfs(0, word.length - 1, 0)
}

const log = console.log

// log(LPS("abcbq")) // 3
// log(LPS("dadxracecarpmadam")) // 7


const LPSMemo = (word) => {
    const dp = {}

    const dfs = (i, j, count) => {

        // REMEMBER TO FUCKING CACHE ALL OF THE ARGUMENTS.
        const seenKey = `${i},${j},${count}`

        if (seenKey in dp) return dp[seenKey]

        // So we don't need to do this if we're only incrementing the count by one any time we
        // get a match. The reason for that is because the pointers will eventually pass each
        // other and we'll get the same match.

        // For example: aba will have a match at: i = 0, j = 2 but ALSO at i = 2, j = 0.
        // Doesn't that double count it?! You may ask.
        // Well.. yeah, but think about it, b and b both contribute one to the string.
        // If you didn't do this, you'd have to make sure you added 2 to the count any time you found
        // a match and then returned the count when the pointers passed each other.
        // if (i > j) return count
        if (i >= word.length || j < 0) return count
    
        if (word[i] === word[j]) {
            dp[seenKey] = dfs(i + 1, j - 1, count + 1)

            return dp[seenKey]
        }
            

    
        dp[seenKey] = Math.max(count, dfs(i + 1, j, 0), dfs(i, j - 1, 0))

        return dp[seenKey]
    }
  
    let result = dfs(0, word.length - 1, 0)

    console.log(dp)

    return result
}


// log(LPSMemo("mbe")) // 1
// log(LPSMemo("abcbq")) // 3
// log(LPSMemo("dadxracecarpmadam")) // 7


const LPSMemoStoppingWhenPointersPassEachOther = (word) => {
    const dp = {}

    const dfs = (i, j, count) => {

        // REMEMBER TO FUCKING CACHE ALL OF THE ARGUMENTS.
        const seenKey = `${i},${j},${count}`

        if (seenKey in dp) return dp[seenKey]

        if (i > j) return count
    
        if (word[i] === word[j]) {
            // So when the pointers are pointing at the same letter, that only contributes
            // a length of 1 to the substring right? But if they're pointing at different characters
            // we need to increment the count by one because they both contribute 1 length each to the
            // substring.

            // Example: bab.
            // When i=0, j=2, b is equal to b. So that's a length of 2.
            // When i=1, j=1, a is a but it's the same a, so that's a length of 1.
            const newCount = i === j ? count + 1: count + 2
            dp[seenKey] = dfs(i + 1, j - 1, newCount)
            return dp[seenKey]
        }
    
        dp[seenKey] = Math.max(count, dfs(i + 1, j, 0), dfs(i, j - 1, 0))

        return dp[seenKey]
    }
  
    return dfs(0, word.length - 1, 0)

}


log(LPSMemoStoppingWhenPointersPassEachOther("mbe")) // 1
log(LPSMemoStoppingWhenPointersPassEachOther("abcbq")) // 3
log(LPSMemoStoppingWhenPointersPassEachOther("dadxracecarpmadam")) // 7
