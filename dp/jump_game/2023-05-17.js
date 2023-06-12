
const jumpGame = nums => {
    const dfs = (i = 0) => {

        if (i >= nums.length) return true

        const maxJump = nums[i]

        for (let j = 1; j <= maxJump; j++) {
            
            if (dfs(i + j)) return true
            
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
        
        if (i + nums[i] === goal) {
            goal = i
        }
        
    }

    return goal === 0
}


log(jumpGameGreedy([2,3,1,1,4])) // true
log(jumpGameGreedy([3,2,1,0,4])) // false