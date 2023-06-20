
const fibTab = n => {

    const table = Array.from({length: n })

    table[0] = 0
    table[0] = 1

    for (let i = 0; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2]
    }

    return table[n]

}


console.log(fib(6)) // 8
console.log(fib(12)) // 89