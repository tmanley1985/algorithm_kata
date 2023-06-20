// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.

// Notice that when you read "you can either do this or that" it represents a choice at each node. This
// problem is very reminiscent of fibonacci.

const canJump = nums => {

    const solve = (i = 0) => {
        if (i >= nums.length) return false 
        if (i === nums.length - 1) return true

        const numOfSteps = nums[i]

        if (numOfSteps === 0) return false

        for (let step = 1; step <= numOfSteps; step++) {
            if (solve(i + step)) return true
        }

        return false
    }

    return solve()
}

const log = console.log
log(canJump([2,3,1,1,4])) // true
log(canJump([2,3,0,0,4])) // false

/**
 * MAXIMUM JUMP LENGTH - remember that! The question tells you that the maximum jump length is x.
 * But implicit in that is that you do NOT have to jump the maximum length!
 * That now presents a choice take up to x steps.
 * 
 * This is the variant of the problem where you're trying to reach the last index or out of bounds.
 * 
 * Here's a Greedy approach that isn't Dynamic Programming: https://www.youtube.com/watch?v=Yan0cv2cLy8&ab_channel=NeetCode
 * 
 * We're going to move backward through the array starting at the end and ask, could you get here from the previous element?
 */
const canJumpGreedy = nums => {

    let goal = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        const currentMaxJump = nums[i]

        if (i + currentMaxJump >= goal) {
            goal = i
        }

    }

    return goal === 0
}

log(canJumpGreedy([2,3,1,1,4])) // true
log(canJumpGreedy([2,3,0,0,4])) // false