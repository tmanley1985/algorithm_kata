
const editDistanceRecursive = (wordOne, wordTwo) => {
    const dfs = (i = 0, j = 0) => {

        if (i === wordOne.length) return wordTwo.length - j
        if (j === wordTwo.length) return wordOne.length - i

        if (wordOne[i] === wordTwo[j]) return dfs(i + 1, j + 1)

        const substitution = dfs(i + 1, j + 1)
        const deletion = dfs(i + 1, j)
        const insertion = dfs(i, j + 1)


        return 1 + Math.min(substitution, deletion, insertion)
    }

    return dfs()
}

const editDistanceTab = (wordOne, wordTwo) => {

    const NUM_ROWS = wordOne.length + 1
    const NUM_COLS = wordTwo.length + 1

    const dp = Array.from({ length: NUM_ROWS })
        .map(_ => Array.from({ length: NUM_COLS }).fill(0))


    // We're going to make the first row 0,1,2,...
    // The intuition here is that the zeroth row represents an empty string.
    // How many steps would it take to turn an empty string into a string of size 1?
    // Well that would be one operation. Insertion.
    // What about size 2? Well that would be two operations. So on and so forth.
    for (let i = 0; i < NUM_ROWS; i++) {
        dp[i][0] = i;
    }

    // We're going to make the first column 0,1,2,...
    for (let i = 0; i < NUM_COLS; i++) {
        dp[0][i] = i;
    }

    for (let row = 1; row < NUM_ROWS; row++) {

        for (let column = 1; column < NUM_COLS; column++) {
            
            // Why is this row minus one and column minus one? Well remember that the row here is representing
            // wordOne while the column represents wordTwo. BUT, we've added a row and a column for the empty string
            // case. So that means that we'll be off by one.
            if (wordOne[row - 1] === wordTwo[column - 1]) {
                dp[row][column] = dp[row - 1][column - 1]
                continue;
            }

            dp[row][column] = 1 + Math.min(
                dp[row - 1][column - 1],
                dp[row - 1][column],
                dp[row][column - 1]
            )
        }
        
    }

    return dp[wordOne.length][wordTwo.length]
}

module.exports = {
    editDistanceRecursive,
    editDistanceTab
}


