// https://leetcode.com/problems/combination-sum-iv/

// This problem looks A LOT like coin change but has a simpler solution

const combinationSum = (nums, target) => {

    if (target === 0) return 1

    let res = 0

    for (const num of nums) {
        if (target >= num) {

            res += combinationSum(nums, target - num)
        }
    }

    return res
}

const log = console.log

log(combinationSum([1,2,3], 4)) // 7
log(combinationSum([9], 3)) // 0


const combinationSumTab = (nums, target) => {

    const dp = Array.from({ length: target + 1}).fill(0)

    // This is a boundary case.
    dp[0] = 1

    for (let i = 1; i < dp.length; i++) {
        
        for (let j = 0; j < nums.length; j++) {
            const num = nums[j]
            
            if (i >= num) {
                // This reminds me of target sum problem
                dp[i] += dp[i - num]
            }
        }
        
    }
     return dp[target]
}

log(combinationSumTab([1,2,3], 4)) // 7
log(combinationSumTab([9], 3)) // 0