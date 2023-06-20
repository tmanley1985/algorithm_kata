// https://leetcode.com/problems/target-sum/description/

// nums = [1,1,1,1,1], target = 3 answer = 5

const targetSum = (nums, target, currentSum = 0, currentIndex = 0) => {

    if (currentIndex === nums.length) return currentSum === target ? 1 : 0

    const subtractChoice = currentSum - nums[currentIndex]
    const addChoice = currentSum + nums[currentIndex]

    console.log({addChoice, subtractChoice})
    return targetSum(nums, target, subtractChoice, currentIndex + 1) + targetSum(nums, target, addChoice, currentIndex + 1)
}

console.log(targetSum([1,1,1,1,1], 3))
console.log(targetSum([1,2], 3))
