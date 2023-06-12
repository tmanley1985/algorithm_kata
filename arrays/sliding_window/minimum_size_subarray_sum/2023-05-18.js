

const log = console.log
const min_subarray_sum_naive = (nums, k) => {
    
    let minLength = Number.POSITIVE_INFINITY

    for (let i = 0; i < nums.length; i++) {
        
        let innerSum = 0
        
        for (let j = i; j < nums.length; j++) {
            
            innerSum += nums[j]

            if (innerSum >= k) {
                minLength = Math.min(minLength, j - i + 1)
                break
            }
            
        }
        
    }

    return minLength === Number.POSITIVE_INFINITY ? 0 : minLength
}


log(min_subarray_sum_naive([1,4,5,7], 100)) // 0
log(min_subarray_sum_naive([2,1,5,2,8], 7)) // 1 (because 8 is greater than)
log(min_subarray_sum_naive([3, 2, 7, 10, 4, 1, 9, 8], 15)) // 2

const min_subarray_sum = (nums, k) => {
    let windowStart = 0
    let windowSum = 0
    let minLength = Number.POSITIVE_INFINITY

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]

        while (windowSum >= k) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1)
            windowSum -= nums[windowStart]
            windowStart++
        }
    }

    return minLength === Number.POSITIVE_INFINITY ? 0 : minLength
};


log(min_subarray_sum([1,4,5,7], 100)) // 0
log(min_subarray_sum([2,1,5,2,8], 7)) // 1 (because 8 is greater than)
log(min_subarray_sum([3, 2, 7, 10, 4, 1, 9, 8], 15)) // 2