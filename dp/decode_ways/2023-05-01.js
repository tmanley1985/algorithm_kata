
const decodeWays = str => {

    const dp = {}

    const dfs = (i = 0) => {

        if (i in dp) return dp[i]

        if (i === str.length) return 1
        // Candidates

        let num = 0

        for (let j = i; j < Math.min(i + 2, str.length); j++) {
            let chars = str.substring(i, j + 1)

            // What is invalid

            let len = chars.length

            if( len === 1 && chars[0] !== "0" || len === 2 && chars[0] !== "0" && chars < 27) {
                num += dfs(j + 1)
            }
            
        }

        dp[i] = num
        return dp[i]
    }

    return dfs()
}

const log = console.log

log(decodeWays("12")) // 2
log(decodeWays("226")) // 3
log(decodeWays("121")) // 3