
const rob = houses => {
    const dfs = (start, end) => {

        if (start >= end) return 0

        return Math.max(dfs(start + 1, end), houses[start] + dfs(start + 2, end))
    }

    return Math.max(dfs(0, houses.length - 1), dfs(1, houses.length))
}

const log = console.log 

log(rob([2,3,2])) // 3
log(rob([4,3,2])) // 4
log(rob([1,2,3,1])) // 4