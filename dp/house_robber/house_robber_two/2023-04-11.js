
const rob = houses => {

    if (houses.length < 4) return Math.max(...houses)

    const helper = (start, end) => {

        if (start >= end) return 0

        return Math.max(helper(start + 1, end), houses[start] + helper(start + 2, end))
    }

    // Basically we're gonna act like we have two arrays:
    // the first one will be 0 through the second to last element
    // the second one will be 1 through the last element
    // Then we just do the normal rob house problem and see which is bigger!
    return Math.max(helper(0, houses.length - 1), helper(1, houses.length))
}

const log = console.log 

log(rob([2,3,2])) // 3
log(rob([4,3,2])) // 4
log(rob([1,2,3,1])) // 4