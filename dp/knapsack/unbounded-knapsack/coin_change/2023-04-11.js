
const coinChangeRecursive = (coins, target) => {
     
    const dfs = remaining => {

        if (remaining === 0) return 1
        if (remaining < 0) return 0

        let minCoins = Number.POSITIVE_INFINITY

        for (let i = 0; i < coins.length; i++) {

            const numWays = dfs(remaining - coins[i])
    
            if (numWays > 0) {
                minCoins = Math.min(minCoins, numWays)
            }
            
        }

        return minCoins === Number.POSITIVE_INFINITY ? minCoins : minCoins + 1
    }

    const result = dfs(target)
    return  result === Number.POSITIVE_INFINITY ? -1 : result - 1
}



console.log("Recursive")
console.log(coinChangeRecursive([1,2,5], 11)) // 3
console.log(coinChangeRecursive([2], 3)) // -1
console.log(coinChangeRecursive([1], 0)) // 0

const coinChangeTab = (coins, target) => {
    const NUM_COLS = target + 1
    const NUM_ROWS = coins.length + 1

    const dp = Array.from({ length: NUM_ROWS })
        .map(_ => Array.from({ length: NUM_COLS }).fill(0))

    dp[0].forEach((_, i) => {
        dp[0][i] = Number.POSITIVE_INFINITY
    })

    dp[0][0] = 0

    for (let row = 1; row < NUM_ROWS; row++) {
        
        for (let column = 1; column < NUM_COLS; column++) {
            
            let currentAmount = column
            let coin = coins[row - 1]
            let previousMinCoinsForAmount = dp[row - 1][column]

            if (coin > currentAmount) {
                dp[row][column] = previousMinCoinsForAmount
            } else {

                let difference = currentAmount - coin
                let minCoinsForDifference = dp[row][difference]
    
                dp[row][column] = Math.min(previousMinCoinsForAmount, minCoinsForDifference + 1)
            }

            
        }
        
    }


    const result = dp[coins.length][target]

    return result === Number.POSITIVE_INFINITY ? -1 : result

}

const log = console.log

log("Tabulated")
log(coinChangeTab([1,2,5], 11)) // 3
log(coinChangeTab([2], 3)) // -1
log(coinChangeTab([1], 0)) // 0