const isInvalidTagName = tagName =>
  tagName.length === 0 || tagName.length > 3 || !/^[A-Z]+$/.test(tagName)

const isValid = code => {
  const stack = []

  let i = 0

  while (i < code.length) {
    const char = code[i]

    if (char === "<") {
      const closingTagIndex = code.indexOf(">", i)

      if (closingTagIndex === -1) return false

      // We're in a closing tag
      if (code[i + 1] === "/") {
        const tagName = code.slice(i + 2, closingTagIndex)

        if (stack.length === 0 || stack[stack.length - 1] !== tagName)
          return false

        stack.pop()
      } else {
        // We're in an opening tag
        const tagName = code.slice(i + 1, closingTagIndex)

        if (isInvalidTagName(tagName)) return false
        stack.push(tagName)
      }

      i = closingTagIndex + 1
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
