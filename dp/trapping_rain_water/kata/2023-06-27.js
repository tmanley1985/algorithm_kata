const solve = heights => {
  const dfs = (i = 0) => {
    // You can't hold water at the boundaries.
    if (i < 0 || i >= heights.length) return 0

    // We have to find the minimum height of either side of current position
    // think about it:
    // At each position, if you have walls that are shorter than you, you can't hold
    // any water!
    // You can only ever hold as much water as the minimum of the maximum walls on
    // either side.
    // Then you have to subtract the height of the blocks at your position.

    let leftMax = 0
    let rightMax = 0

    // Let's find the tallest wall on the current position's leftward side.
    for (let j = i - 1; j >= 0; j--) {
      leftMax = Math.max(leftMax, heights[j])
    }

    // Let's find the tallest wall on the current positions rightward side.
    for (let j = i + 1; j < heights.length; j++) {
      rightMax = Math.max(rightMax, heights[j])
    }

    // Now we have to take the minimum of these because the water level can only
    // be as high as the smaller one.
    const min = Math.min(leftMax, rightMax)

    // We need to make sure the the walls on either side are actually taller
    // that the current position. If they're not, we can hold 0 water.
    const water = min > heights[i] ? min - heights[i] : 0

    return water + dfs(i + 1)
  }

  return dfs()
}

module.exports = {
  solve,
}
