
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.


const jumpGame = nums => {
    if (nums.length === 0) return false 
    if (nums.length === 1) return true 

    const dp = {}

    const dfs = (currentIndex = 0) => {
        if (currentIndex >= nums.length) return true
        const maxJumps = nums[currentIndex]

        // If we haven't made it to the end and we have a zero... then we ain't moving forward.
        // So there's no way we can make it to the end.
        if (maxJumps === 0) return false

        if (currentIndex in dp) return dp[currentIndex]

        let couldJump = false
    
        for (let jump = 1; jump <= maxJumps; jump++) {
            
            if (dfs(currentIndex + jump)) {
                couldJump = true
            }
            
        }

        dp[currentIndex] = couldJump

        return dp[currentIndex]
    }

    return dfs()
}


const log = console.log

log(jumpGame([2,3,1,1,4])) // true
log(jumpGame([3,2,1,0,4])) // false


const jumpGameGreedy = nums => {
    
    let goal = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        
        const maxJump = nums[i]

        if (i + maxJump === goal) {
            goal = i
        }
        
    }

    return goal === 0
}

log(jumpGameGreedy([2,3,1,1,4])) // true
log(jumpGameGreedy([3,2,1,0,4])) // false