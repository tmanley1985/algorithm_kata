
const coinChange = (coins, target) => {

    const dfs = remaining => {
        if (remaining === 0) return 1

        if (remaining < 0) return 0

        let min = Number.POSITIVE_INFINITY

        for (let i = 0; i < coins.length; i++) {
            
            let numWays = dfs(remaining - coins[i])
            if (numWays > 0) {
                min = Math.min(min, numWays)
            }
            
        }

        return min === Number.POSITIVE_INFINITY ? min : min + 1
    }

    let result = dfs(target)

    return result === Number.POSITIVE_INFINITY ? -1 : result - 1

}

const log = console.log

log("RECURSIVE")
log(coinChange([1,2,5], 11)) // 3
log(coinChange([2], 3)) // -1
log(coinChange([1], 0)) // 0

const coinChangeTab = (coins, target) => {

    const NUM_ROWS = coins.length + 1
    const NUM_COLS = target + 1

    const dp = Array.from({ length: NUM_ROWS })
        .map(_ => Array.from({ length: NUM_COLS }).fill(0))

    dp[0].forEach((_, i) => {
        if (i > 0) {
            dp[0][i] = Number.POSITIVE_INFINITY
        }
    })

    for (let row = 1; row < NUM_ROWS; row++) {
        
        for (let column = 1; column < NUM_COLS; column++) {
            
            let coin = coins[row - 1]
            let currentAmount = column
            let previousMinCoinsForAmount = dp[row - 1][column]

            // Can't use the coin
            if (coin > currentAmount) {
                dp[row][column] = previousMinCoinsForAmount
                continue;
            }

            let difference = currentAmount - coin

            // We use the coin
            dp[row][column] = Math.min(previousMinCoinsForAmount, 1 + dp[row][difference])
            
        }
    }
    const result = dp[coins.length][target]

    return result === Number.POSITIVE_INFINITY ? -1 : result
}

log("TABULATED")
log(coinChangeTab([1,2,5], 11)) // 3
log(coinChangeTab([2], 3)) // -1
log(coinChangeTab([1], 0)) // 0
