const isValid = s => {
  const stack = []

  const closingToOpening = {
    "}": "{",
    "]": "[",
    ")": "(",
  }

  const isOpeningBrace = brace =>
    Object.values(closingToOpening).includes(brace)

  let i = 0

  while (i < s.length) {
    const brace = s[i]

    if (isOpeningBrace(brace)) {
      stack.push(brace)
    } else {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== closingToOpening[brace]
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
