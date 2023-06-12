
const LPS = word => {
    const dfs = (i, j, count) => {

        if (i === word.length || j < 0) return count

        if (word[i] === word[j]) return dfs(i + 1, j - 1, count + 1)

        return Math.max(dfs(i, j - 1, count), dfs(i + 1, j, count))
    }

    return dfs(0, word.length - 1, 0)
}

const log = console.log 

log("LPS")
log(LPS("mom")) // 3
log(LPS("mpom")) // 3
log(LPS("agbdba")) // 5