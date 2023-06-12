// https://www.youtube.com/watch?v=cjWnW0hdF1Y&ab_channel=NeetCode

// https://leetcode.com/problems/longest-increasing-subsequence/

const LIS = (nums, i = 0, previousNum = Number.NEGATIVE_INFINITY) => {

    if (i === nums.length) return 0

    const includeChoice = nums[i] > previousNum ? 1 + LIS(nums, i + 1, nums[i]) : 0
    const excludeChoice = LIS(nums, i + 1, previousNum)


    return Math.max(includeChoice, excludeChoice)
}

const log = console.log 

log(LIS([0,1,0,3,2,3])) // 4