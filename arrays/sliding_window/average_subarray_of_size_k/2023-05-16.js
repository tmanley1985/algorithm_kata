
const avg_sub_array_naive = (nums, k) => {

    let averages = []

    for (let i = 0; i <= nums.length - k; i++) {
       
        let sum = 0

        for (let j = 0; j < k; j++) {
            
            sum += nums[i + j]
            
        }

        averages.push( sum / k)
    }

    return averages
}

const log = console.log 

log(avg_sub_array_naive([1,2,3,4,5], 3)) // [2,3,4]
log(avg_sub_array_naive([1,3,2,6,-1,4,1,8,2], 5)) // [2.2, 2.8, 2.4, 3.6, 2.8]

const avg_sub_array = (nums, k) => {
    const averages = []

    let windowStart = 0
    let windowSum = 0

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        
        windowSum += nums[windowEnd]

        if (windowEnd >= k - 1) {

            averages.push(windowSum / k)
    
            windowSum -= nums[windowStart]
            windowStart++
        }

        
    }

    return averages

}

log(avg_sub_array([1,2,3,4,5], 3)) // [2,3,4]
log(avg_sub_array([1,3,2,6,-1,4,1,8,2], 5)) // [2.2, 2.8, 2.4, 3.6, 2.8]