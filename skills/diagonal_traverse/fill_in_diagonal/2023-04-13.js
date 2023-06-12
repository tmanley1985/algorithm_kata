  
const dp = Array.from({ length: 5 })
    .map(_ => Array.from({ length: 5 }).fill(0))

const fill = arr => {

    for (let i = 0; i < arr.length; i++) {
        arr[i][i] = 1
    }

    return arr
}

console.table(fill(dp))