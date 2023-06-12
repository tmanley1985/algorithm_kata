
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

const jumpGame = nums => {
    const dfs = ( i = 0) => {
        if (i >= nums.length - 1) return true

       
        const maxJump = nums[i]

        let couldFinish = false

        for (let jump = 1; jump <= maxJump; jump++) {
            
            if (dfs(i + jump)) {
                couldFinish = true
            }
        }

        return couldFinish
    }

    return dfs()
}




const log = console.log

log(jumpGame([2,3,1,1,4])) // true
log(jumpGame([3,2,1,0,4])) // false