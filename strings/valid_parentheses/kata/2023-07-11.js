const isValid = s => {
  if (s.length % 2 !== 0) return false
  const stack = []

  const closingToOpeningMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    // We have an opening brace
    if (!(char in closingToOpeningMap)) {
      stack.push(char)
      continue
    }

    if (
      stack.length === 0 ||
      stack[stack.length - 1] !== closingToOpeningMap[char]
    )
      return false

    stack.pop()
  }

  return stack.length === 0
}

module.exports = {
  isValid,
}
