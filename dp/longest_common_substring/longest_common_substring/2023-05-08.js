const log = console.log 

const LCS = (s1, s2) => {

    const NUM_ROWS = s1.length + 1
    const NUM_COLS = s2.length + 1

    const dp = Array.from({ length: NUM_ROWS})
        .map(_ => Array.from({length: NUM_COLS}).fill(0))

    let max = 0

    for (let i = 1; i < NUM_ROWS; i++) {
        
        for (let j = 1; j < NUM_COLS; j++) {
            
            if (s1[i - 1] !== s2[j - 1]) {
                continue;
            }

            dp[i][j] = 1 + dp[i - 1][j - 1]
            max = Math.max(max, dp[i][j])
            
        }
        
    }

    console.table(dp)
    return max
}


log("TABULATED")


// Test Case 1: No common substring
log(LCS("abcdefg", "xyz")); // Output: 0

// Test Case 2: Single character common substring
log(LCS("abcdefg", "xyzaghi")); // Output: 1

// Test Case 3: Multiple common substrings
log(LCS("abcdefg", "xyzabcklmefg")); // Output: 3

// Test Case 4: Longer common substring
log(LCS("abcdefg", "xyzabcdefghi")); // Output: 7


const LCSRecursive = (wordOne, wordTwo) => {
    const dfs = (i = 0, j = 0, count = 0) => {

        if (i === wordOne.length || j === wordTwo.length) return count 

        // Include

        const matchPath = wordOne[i] === wordTwo[j] ? dfs(i + 1, j + 1, count + 1) : 0 

        // Exclude

        return Math.max(
            matchPath,
            dfs(i, j + 1, 0),
            dfs(i + 1, j, 0)
        )
    }

    return dfs()
}

log("RECURSIVE")

// Test Case 1: No common substring
log(LCSRecursive("abcdefg", "xyz")); // Output: 0

// Test Case 2: Single character common substring
log(LCSRecursive("abcdefg", "xyzaghi")); // Output: 1

// Test Case 3: Multiple common substrings
log(LCSRecursive("abcdefg", "xyzabcklmefg")); // Output: 3

// Test Case 4: Longer common substring
log(LCSRecursive("abcdefg", "xyzabcdefghi")); // Output: 7

