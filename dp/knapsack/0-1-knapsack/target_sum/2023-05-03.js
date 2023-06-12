
const targetSum = (nums, target) => {
    const dfs = (i = 0, remaining = target) => {
        if (i === nums.length) return remaining === 0 ? 1 : 0

        const addChoice = dfs(i + 1, remaining + nums[i])
        const subtractChoice = dfs(i + 1, remaining - nums[i])

        return addChoice + subtractChoice
    }

    return dfs()
}

console.log(targetSum([1,1,1,1,1], 3)) // 5
console.log(targetSum([1,2], 3)) // 1
console.log(targetSum([1,2,3], 3)) // 0


const targetSumDP = (nums, target) => {

    const offset = nums.reduce((acc, val) => acc + val)
    const NUM_ROWS = nums.length + 1
    const NUM_COLS = (offset * 2) + 1

    const dp = Array.from({ length: NUM_ROWS })
        .map(_ => Array.from({ length: NUM_COLS }).fill(0))

    dp[0][offset] = 1

    for (let row = 0; row < NUM_ROWS - 1; row++) {
        
        for (let column = 0; column < NUM_COLS; column++) {
            
            if (dp[row][columnn] > 0) {
                dp[row + 1][column - nums[row]] += dp[row][column]
                dp[row + 1][column + nums[row]] += dp[row][column]
            }
            
        }
        
    }

    return dp[nums.length][offset + target]

}

console.log(targetSum([1,1,1,1,1], 3)) // 5
console.log(targetSum([1,2], 3)) // 1
console.log(targetSum([1,2,3], 3)) // 0