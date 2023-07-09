class Stack {
  constructor() {
    this.stack = []
  }

  push(element) {
    return this.stack.push(element)
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    return this.stack[this.size() - 1]
  }

  size() {
    return this.stack.length
  }

  isEmpty() {
    return this.size() === 0
  }
}

const isValid = s => {
  if (s.length % 2 !== 0) return false

  const stack = new Stack()

  const closingToOpeningMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  }

  const isClosingCharacter = c => ["}", ")", "]"].includes(c)

  for (const character of s) {
    if (isClosingCharacter(character)) {
      if (stack.isEmpty() || stack.peek() !== closingToOpeningMap[character])
        return false

      stack.pop()
      continue
    }

    stack.push(character)
  }

  return stack.isEmpty()
}

module.exports = {
  isValid,
}
