

const coinChangeRecursive = (coins, amount) => {


    const dfs = remaining => {

        if (remaining === 0) return 0

        if (remaining < 0) return -1


        let min = Number.POSITIVE_INFINITY
    
        for (let i = 0; i < coins.length; i++) {
            
            const newTarget = remaining - coins[i]

            let numWays = dfs(newTarget)

            if ( numWays >= 0 && numWays < amount) {
                // We add one here because we're counting the current node
                min = 1 + numWays
            }

        }

        return min === Number.POSITIVE_INFINITY ? -1 : min

    }

    return dfs(amount)

}

const log = console.log

log(coinChangeRecursive([2], 3)) // -1
log(coinChangeRecursive([1,2,5], 11)) // 3