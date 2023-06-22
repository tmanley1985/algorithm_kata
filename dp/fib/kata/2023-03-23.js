const fib = (n, memo = {}) => {
  if (n in memo) return n
  if (n < 2) return n

  const previous = fib(n - 1) + fib(n - 2)
  memo[n] = previous
  return previous
}

module.exports = {
  fib,
}
