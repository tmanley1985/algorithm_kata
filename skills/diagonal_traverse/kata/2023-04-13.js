
const dp = Array.from({ length: 5 })
    .map(_ => Array.from({ length: 5 }).fill(0))

const traverseDiagonallyLeftUp = arr => {
    for (let row = 0; row < arr.length; row++) {
        
        for (let column = 0; column < arr.length - row; column++) {
            
            arr[row][column] = 1
            
        }
        
    }

    return arr
}

// console.table(traverseDiagonallyLeftUp(dp))

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

console.table(traverseDiagonallyRightUp(dp))