const targetSumRecursive = (nums, target) => {
  const dp = {}

  const backtrack = (currentSum = 0, currentIndex = 0) => {
    const seenKey = `${currentSum},${currentIndex}`

    if (currentIndex === nums.length) return currentSum === target ? 1 : 0

    if (seenKey in dp) return dp[seenKey]

    return (
      backtrack(currentSum - nums[currentIndex], currentIndex + 1) +
      backtrack(currentSum + nums[currentIndex], currentIndex + 1)
    )
  }

  return backtrack()
}

function targetSumDP(nums, target) {
  let sum = nums.reduce((a, b) => a + b, 0)
  if (Math.abs(target) > Math.abs(sum)) return 0

  let offset = sum
  let dp = new Array(nums.length + 1)
    .fill(null)
    .map(() => new Array(2 * sum + 1).fill(0))
  dp[0][offset] = 1

  for (let coinIndex = 0; coinIndex < nums.length; coinIndex++) {
    for (let currentSum = 0; currentSum < 2 * sum + 1; currentSum++) {
      // Remember each cell is going to store the number of ways to reach the current sum up to the current coin
      let numWaysForSum = dp[coinIndex][currentSum]

      let nextCoinIndex = coinIndex + 1
      let currentCoin = nums[coinIndex]

      if (numWaysForSum !== 0) {
        // Okay, so basically because you can either add or subtract the coin,
        // we are just adding the current number of ways to sum to the current sum to both of those locations.
        // Remember that in each cell we're trying to coint the number of ways for that current sum using UP TO the coins that we're on!
        // Each row is supposed to INCLUDE the row before it, it's not taken in isolation.

        // Why do we look to that specific column? Well think about it. From zero, if you have a choice
        // to both add or subtract a number, that's essentially saying the distance from zero right? -1 is one away from
        // zero to the left.

        // So at any cell what that is saying, is that the distance if you took the values UP TO the current one
        // and summed them would be the distance away from zero.

        // It's almost like saying, hey, up to the current number, how many ways could you add these
        // things up to get to the target value that we're on?

        // Draw this in a table and you'll understand.
        dp[nextCoinIndex][currentSum + currentCoin] += numWaysForSum
        dp[nextCoinIndex][currentSum - currentCoin] += numWaysForSum
      }
    }
  }

  return dp[nums.length][target + offset]
}

module.exports = {
  targetSumRecursive,
  targetSumDP,
}
