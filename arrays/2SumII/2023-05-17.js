
// Given a sorted array and a target, return two CONSECUTIVE indices that add up to the target.
// This problem has a 1 based index, so assume the indices start at 1 intstead of zero.

const twoSumIINaive = (nums, target) => {


    for (let i = 0; i < nums.length - 1; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            

            if (nums[i] + nums[j] === target) return [i + 1, j + 1]
            
        }
    }

    return []
}

const log = console.log 

log(twoSumIINaive([1,3,4,5,7,10,11], 9)) // [2,3] becomes [3,4] because of 1 based indexing.


const twoSumII = (nums, target) => {

    const dp = {}

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (complement in dp) return [dp[complement] + 1, i + 1]
        dp[nums[i]] = i
        
    }

    return []
}

log(twoSumII([1,3,4,5,7,10,11], 9)) 