const solveRecursive = heights => {
  const dfs = (i = 0) => {
    if (i < 0 || i >= heights.length) return 0

    let leftMax = 0
    let rightMax = 0

    // We have to start at the place just before the current position if we are
    // to find the leftMax
    for (let j = i - 1; j >= 0; j--) {
      leftMax = Math.max(leftMax, heights[j])
    }

    for (let j = i + 1; j < heights.length; j++) {
      rightMax = Math.max(rightMax, heights[j])
    }

    const min = Math.min(leftMax, rightMax)

    return (min - heights[i] < 1 ? 0 : min - heights[i]) + dfs(i + 1)
  }

  return dfs()
}

const solveDP = heights => {
  let l = 0
  let r = heights.length - 1

  let leftMax = heights[l]
  let rightMax = heights[r]

  let result = 0

  // A two pointer solution saves memory and time.
  // Again, we look to see the min of the tallest structures
  // on either side of the current position.
  // That's because the water can only ever rise to the second highest structure.
  while (l < r) {
    if (leftMax < rightMax) {
      l += 1
      leftMax = Math.max(leftMax, heights[l])
      result += leftMax - heights[l]
    } else {
      r -= 1
      rightMax = Math.max(rightMax, heights[r])
      result += rightMax - heights[r]
    }
  }

  return result
}

module.exports = {
  solveRecursive,
  solveDP,
}
