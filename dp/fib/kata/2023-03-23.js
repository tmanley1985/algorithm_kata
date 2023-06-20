
// Practice the recurrence relationship

const fib = (n, memo = {}) => {

    if (n in memo) return n
    if (n < 2) return n 

    const previous = fib(n - 1 ) + fib(n - 2)
    memo[n] = previous 
    return previous
}

console.log(fib(6)) // 8
console.log(fib(12)) // 89