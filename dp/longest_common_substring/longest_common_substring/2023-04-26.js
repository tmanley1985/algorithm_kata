
const LCS = (wordOne, wordTwo) => {


    const NUM_COLS = wordOne.length + 1
    const NUM_ROWS = wordTwo.length + 1

    const dp = Array.from({ length: NUM_ROWS })
        .map(_ => Array.from({ length: NUM_COLS }).fill(0))

    for (let wordTwoIndex = 1; wordTwoIndex < NUM_ROWS; wordTwoIndex++) {
       
        for (let wordOneIndex = 1; wordOneIndex < NUM_COLS; wordOneIndex++) {
           
            let row = wordTwoIndex
            let column = wordOneIndex
            let wordOneLetter = wordOne[wordOneIndex - 1]
            let wordTwoLetter = wordTwo[wordTwoIndex - 1]

            if (wordOneLetter === wordTwoLetter) {
                dp[row][column] = 1 + dp[row - 1][column - 1]
                continue;
            }

            dp[row][column] = Math.max(dp[row][column - 1], dp[row - 1][column])
        }
        
    }

    return dp[wordTwo.length][wordOne.length]
    

}

const log = console.log 

log(LCS("hello", "hell")) // 4
log(LCS("hello", "hel")) // 3
log(LCS("hello", "h")) // 1
log(LCS("hello", "")) // 0
