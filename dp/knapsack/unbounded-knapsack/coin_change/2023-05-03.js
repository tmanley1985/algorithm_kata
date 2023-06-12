
const coinChange = (coins, target) => {

    const dfs = (currentAmount = 0) => {

        if (currentAmount === target) return 1

        if (currentAmount > target) return 0

        let minWays = Number.POSITIVE_INFINITY

        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];

            const x = dfs(currentAmount + coin)

            if (x > 0) {
                minWays = Math.min(minWays, x)
            }
            
        }

        return minWays === Number.POSITIVE_INFINITY ? minWays : minWays + 1

    }

    let result = dfs()

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
            
            const coin = coins[row - 1]
            const currentTarget = column

            // Exclude
            if (coin > currentTarget) {

                dp[row][column] = dp[row - 1][column]
                continue;
            }

            // Include

            const difference = column - coin

            dp[row][column] = 1 + dp[row][difference]
            
        }
        
    }

    let result = dp[coins.length][target]

    return result === Number.POSITIVE_INFINITY ? -1 : result

}


log("TABULATED")
log(coinChangeTab([1,2,5], 11)) // 3
log(coinChangeTab([2], 3)) // -1
log(coinChangeTab([1], 0)) // 0
