const isValid = s => {
  const stack = []

  let i = 0

  const closingToOpeningMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  }

  const isOpeningCharacter = c => Object.values(closingToOpeningMap).includes(c)

  while (i < s.length) {
    const brace = s[i]

    if (isOpeningCharacter(brace)) {
      stack.push(brace)
    } else {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== closingToOpeningMap[brace]
      )
        return false
      stack.pop()
    }

    i++
  }

  return stack.length === 0
}

module.exports = {
  isValid,
}
