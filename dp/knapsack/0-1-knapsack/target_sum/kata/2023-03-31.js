
const targetSum = (nums, target) => {
    const dp = {}

    const backtrack = (currentIndex = 0, currentSum = 0) => {
        const seenKey = `${currentIndex},${currentSum}`

        if (currentIndex === nums.length) return currentSum === target ? 1 : 0

        if (seenKey in dp) return dp[seenKey]

        dp[seenKey] = backtrack(currentIndex + 1, currentSum + nums[currentIndex]) + backtrack(currentIndex + 1, currentSum - nums[currentIndex])

        return dp[seenKey]
    }

    return backtrack()
}

console.log(targetSum([1,1,1,1,1], 3))
console.log(targetSum([1,2], 3))
console.log(targetSum([1,2,3], 3))
console.log(targetSum([1,1,1,1], 0))