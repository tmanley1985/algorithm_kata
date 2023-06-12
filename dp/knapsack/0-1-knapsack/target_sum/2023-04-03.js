// https://leetcode.com/problems/target-sum/description/

const targetSumDP = (nums, target) => {

    // We need to have the number of columns go the full length of all of these
    // numbers added together but also all of them flipped to NEGATIVE and added together
    // but we also need a space for 0.

    const NUM_COLS = (nums.reduce((acc, val) => acc + val) * 2) + 1

    const NUM_ROWS = nums.length + 1

    // When we're drawing a table, we would be able to have a 0 and then negative indexes right?
    // Well we're working with arrays. So we can't have negative indexes.
    const offset = nums.reduce((acc, val) => acc + val)

    const dp = Array.from({ length: NUM_ROWS })
        .map(_ => Array.from({ length: NUM_COLS }).fill(0))

    // We need to set the middle element to zero. Draw out the able to understand why.
    dp[0][offset] = 1

    // REMEMBER! We don't want to iterate over the last row, which is the ANSWER ROW.
    // Because that row will NOT CORRESPOND TO ANY ELEMENT IN THE ARRAY!
    for (let row = 0; row < NUM_ROWS - 1; row++) {
        
        for (let column = 0; column < NUM_COLS; column++) {
            
            const numWaysToReachZeroUpToCurrentNumber = dp[row][column]

            if (numWaysToReachZeroUpToCurrentNumber > 0) {
                const nextRow = row + 1
                // We want to take the current column we are on
                // and add to that, the current number that we're looking at.
                const nextRightColumn = column + nums[row]
                const nextLeftColumn = column - nums[row]
                
                dp[nextRow][nextLeftColumn] += numWaysToReachZeroUpToCurrentNumber
                dp[nextRow][nextRightColumn] += numWaysToReachZeroUpToCurrentNumber
            }
            
        }
        
    }


    // Remember, if this were a normal table all we'd have to do is look to the row X target.
    // But this is an array we don't have negative indices. Draw out the table to understand
    // why.
    console.table(dp)
    return dp[nums.length][target + offset]
}


// console.log(targetSumDP([1,1,1,1,1], 3)) //5
console.log(targetSumDP([1,2], 3)) // 1
// console.log(targetSumDP([1,2,3], 3)) //0
// console.log(targetSumDP([1,1,1,1], 0)) // 6