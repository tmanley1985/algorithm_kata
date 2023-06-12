
const jumpGame = nums => {

    const dfs = (i = 0) => {
        if ( i >= nums.length) return true

        const maxJump = nums[i]

        for (let jump = 1; jump <= maxJump; jump++) {
            
            if (dfs(jump + i)) return true
            
        }

        return false
    }

    return dfs()
}

const log = console.log

log(jumpGame([2,3,1,1,4])) // true
log(jumpGame([3,2,1,0,4])) // false


const jumpGameGreedy = nums => {

    let goal = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        
        const num = nums[i]

        if (i + num === goal) {
            goal = i
        }
        
    }

    return goal === 0
}

log(jumpGameGreedy([2,3,1,1,4])) // true
log(jumpGameGreedy([3,2,1,0,4])) // false