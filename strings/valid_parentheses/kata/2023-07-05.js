const isValid = s => {
  if (s.length === 1) return false

  const openingMap = {
    "]": "[",
    "}": "{",
    ")": "(",
  }

  let stack = []

  for (const char of s) {
    if (["{", "(", "["].includes(char)) {
      stack.push(char)
    } else {
      // If we have a closing brace, we need to get the corresponding opening
      // brace.
      const openingCharacter = openingMap[char]

      // If the stack is empty, it means we have an extra closing brace which means
      // the string is invalid.
      // If the item at the top of the stack isn't equal to the opening brace
      // it means we have a mismatch of braces.
      // Either of these cases invalidates the string.
      if (stack.length === 0 || stack[stack.length - 1] !== openingCharacter)
        return false

      stack.pop()
    }
  }

  // In a situation like this: "{{", the stack would still be full because
  // we wouldn't have any closing braces to pop them off and pair with.
  return stack.length === 0
}

module.exports = {
  isValid,
}
