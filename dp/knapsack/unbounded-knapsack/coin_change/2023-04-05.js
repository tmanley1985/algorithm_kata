

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

const log = console.log 

log(coinChangeRecursive([1,2,5], 11)) // 3
log(coinChangeRecursive([2], 3)) // -1
log(coinChangeRecursive([1], 0)) // 0

const coinChangeTab = (coins, target) => {

    const NUM_ROWS = coins.length + 1
    const NUM_COLS = target + 1

    const dp = Array.from({ length: NUM_ROWS})
        .map(_ => Array.from({ length: NUM_COLS }).fill(0))


    dp[0].forEach((_, i) => {
        dp[0][i] = Number.POSITIVE_INFINITY
    })

    dp[0][0] = 0

    for (let row = 1; row < NUM_ROWS; row++) {
        for (let column = 1; column < NUM_COLS; column++) {
        
            let currentTarget = column
            let currentCoin = coins[row - 1]

            previousMinCoinsForTotal = dp[row - 1][column]

    
            // Exclude
            if (currentCoin > currentTarget) {
                dp[row][column] = previousMinCoinsForTotal

            } else {
                // Include the coin

                // Use the coin, get the remainder

                const remainder = currentTarget - currentCoin
                const minCoinsForRemainder = dp[row][remainder]

                // We add one because we have to say that if we use the current coin, that
                // is well... using a coin. Once. lol.
                dp[row][column] = Math.min(previousMinCoinsForTotal, 1 + dp[row][column - currentCoin])
            }
            

        }
        
    }

    console.table(dp)

    const result = dp[coins.length][target]

    return result === Number.POSITIVE_INFINITY ? -1 : result
}


log("Tabulated")
log(coinChangeTab([1,2,5], 11)) // 3
log(coinChangeTab([2], 3)) // -1
log(coinChangeTab([1], 0)) // 0
