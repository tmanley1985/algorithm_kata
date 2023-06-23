const traverseDiagonallyLeftUp = arr => {
  // We have to start at 0 because that's part of the left top diagonal
  for (let row = 0; row < arr.length; row++) {
    // If you want to fill in the diagonal, you can remove the `-1` here.
    for (let column = 0; column < arr.length - row - 1; column++) {
      arr[row][column] = 1
    }
  }

  return arr
}

const traverseDiagonallyRightUp = arr => {
  for (let start = 1; start < arr.length; start++) {
    let column = start

    for (let row = 0; row < arr.length - start; row++) {
      arr[row][column] = 1

      column += 1
    }
  }

  return arr
}

const traverseDiagonalOnly = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i][i] = 1
  }

  return arr
}

module.exports = {
  traverseDiagonallyLeftUp,
  traverseDiagonallyRightUp,
  traverseDiagonalOnly,
}
