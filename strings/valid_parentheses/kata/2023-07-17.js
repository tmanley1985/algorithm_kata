const isValid = s => {
  const stack = []

  if (s.length % 2 !== 0) return false

  let i = 0

  const closingToOpeningMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  }

  const isOpeningCharacter = c => Object.values(closingToOpeningMap).includes(c)

  while (i < s.length) {
    const paren = s[i]

    if (isOpeningCharacter(paren)) {
      stack.push(paren)
      i++
    } else {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== closingToOpeningMap[paren]
      )
        return false

      stack.pop()
      i++
    }
  }

  return stack.length === 0
}

module.exports = {
  isValid,
}
