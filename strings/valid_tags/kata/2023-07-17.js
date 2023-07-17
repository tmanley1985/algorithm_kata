const isInvalidTagName = tagName =>
  tagName.length === 0 || tagName.length > 3 || !/^[A-Z]+$/.test(tagName)

const isValid = s => {
  const stack = []

  let i = 0

  while (i < s.length) {
    const char = s[i]

    if (char === "<") {
      const endingBracketIndex = s.indexOf(">", i)

      if (endingBracketIndex === -1) return false

      if (s[i + 1] === "/") {
        const tagName = s.slice(i + 2, endingBracketIndex)

        if (stack.length === 0 || stack[stack.length - 1] !== tagName)
          return false

        stack.pop()
      } else {
        const tagName = s.slice(i + 1, endingBracketIndex)

        if (isInvalidTagName(tagName)) return false
        stack.push(tagName)
      }
      i = endingBracketIndex + 1
    } else {
      if (stack.length === 0) return false
      i++
    }
  }

  return stack.length === 0
}

module.exports = {
  isValid,
}
