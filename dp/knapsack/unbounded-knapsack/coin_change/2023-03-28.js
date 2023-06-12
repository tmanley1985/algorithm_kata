// Input: coins = [1, 2, 3], amount = 5
// Output: 2
// Explanation: The minimum number of coins needed to make up the amount 5 is 2.

function coinChange(coins, amount) {
    const NUM_ROWS = coins.length + 1
    const NUM_COLS = amount + 1

    const dp = Array.from({length: NUM_ROWS})
        .map(_ => Array.from({length: NUM_COLS}))


    dp[0][0] = 1

    dp[0].forEach((_, i) => {
        if (i === 0) return 
        dp[0][i] = Number.POSITIVE_INFINITY
    })
        
    
    console.table(dp)
    for (let row = 1; row < NUM_ROWS; row++) {
        for (let column = 1; column < NUM_COLS; column++) {
            
        }
    }

    return dp[NUM_ROWS][NUM_COLS]

}

console.log(coinChange([1,2,3], 5)) // 3



