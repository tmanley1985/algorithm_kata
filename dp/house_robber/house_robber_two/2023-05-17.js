const rob = houses => {
    const dfs = (i, j) => {

        if (i >= j) return 0

        return Math.max(houses[i] + dfs(i + 2, j), dfs(i + 1, j))
    }

    return Math.max(dfs(0, houses.length - 1), dfs(1, houses.length))
}

const log = console.log 

log(rob([2,3,2])) // 3
log(rob([4,3,2])) // 4
log(rob([1,2,3,1])) // 4