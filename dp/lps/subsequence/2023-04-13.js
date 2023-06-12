// Subsequence

const reverse = str => str.split("").reverse().join("")

const LCS = word => {

    const reversed = reverse(word)
    console.log({ reversed })

    const NUM_ROWS = word.length + 1
    const NUM_COLS = word.length + 1

    const dp = Array.from({ length: NUM_ROWS })
        .map(_ => Array.from({ length: NUM_COLS }).fill(0))

    for (let wordOneIndex = 1; wordOneIndex < NUM_ROWS; wordOneIndex++) {
        
        for (let wordTwoIndex = 1; wordTwoIndex < NUM_COLS; wordTwoIndex++) {
            
            let wordOneLetter = word[wordOneIndex - 1]
            let wordTwoLetter = reversed[wordTwoIndex - 1]


            if (wordOneLetter !== wordTwoLetter) {
                let above = dp[wordOneIndex - 1][wordTwoIndex]
                let left = dp[wordOneIndex][wordTwoIndex - 1]

                dp[wordOneIndex][wordTwoIndex] = Math.max(above, left)
                continue;
            }
         
            dp[wordOneIndex][wordTwoIndex] = dp[wordOneIndex - 1][wordTwoIndex - 1] + 1
        }
        
    }

    return dp[NUM_ROWS - 1][NUM_COLS - 1]
}

const log = console.log

log("LCS")
log(LCS("mom")) // 3
log(LCS("mpom")) // 3
log(LCS("agbdba")) // 5

const LCP = word => {

    if (word.length < 2) return word.length

    const dp = Array.from({ length: word.length })
        .map(_ => Array.from({ length: word.length }))
    
    // Mark the diagonals as 1 because a letter that matches itself is a palindrome of 1.
    for (let i = 0; i < dp.length; i++) {
        dp[i][i] = 1
    }

    for (let start = 1; start < dp.length; start++) {
        
        let column = start
        
        for (let row = 0; row < dp.length - start; row++) {
            
            if (word[row] === word[column]) {
                // We use 2 here because there is a match between two characters
                // and they both contribute to the subsequence and we'll never see them again.
                dp[row][column] = 2 + dp[row + 1][column - 1]
            } else {
                dp[row][column] = Math.max(dp[row][column - 1], dp[row + 1][column])
            }

            column += 1
            
        }
        
    }

    console.table(dp)
    return dp[0][word.length - 1]
}

console.log("LCP")
log(LCP("mom")) // 3
log(LCP("mpom")) // 3
log(LCP("agbdba")) // 5