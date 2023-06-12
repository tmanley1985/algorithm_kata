
const targetSum = (nums, target) => {

    const dp = {}

    const backtrack = (currentSum = 0, currentIndex = 0) => {
        const key = `${currentIndex},${currentSum}`

        if (currentIndex === nums.length) return currentSum === target ? 1 : 0
    

        if (key in dp) return dp[key]

        dp[key] = backtrack(currentSum - nums[currentIndex], currentIndex + 1) + backtrack(currentSum + nums[currentIndex], currentIndex + 1)

        return dp[key]
    }

    return backtrack()

}

console.log(targetSum([1,1,1,1,1], 3))
console.log(targetSum([1,2], 3))
console.log(targetSum([1,2,3], 3))