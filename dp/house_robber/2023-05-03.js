
const rob = (houses, i = 0) => {
    if (i >= houses.length) return 0

    return Math.max(rob(houses, i + 1), houses[i] + rob(houses, i + 2))
}

const log = console.log

log(rob([1,2,3,1])) // 4
log(rob([2,7,9,3,1])) // 12

const robTab = houses => {

    if (houses.length === 0) return 0

    if (houses.length === 1) return houses[0]

    if (houses.length === 2) return Math.max(houses[0], houses[1])

    const dp = Array.from({ length: houses.length })

    dp[0] = houses[0]
    dp[1] = Math.max(houses[0], houses[1])


    for (let i = 2; i < dp.length; i++) {
        
        dp[i] = Math.max(dp[i - 1], houses[i] + dp[i - 2])
        
    }

    return dp[houses.length - 1]
}

log(robTab([1,2,3,1])) // 4
log(robTab([2,7,9,3,1])) // 12

