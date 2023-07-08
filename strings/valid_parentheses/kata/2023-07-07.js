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
    return this.stack[this.stack.length - 1]
  }

  size() {
    return this.stack.length
  }
}

const isValid = s => {
  if (s.length % 2 !== 0) return false

  const openingMap = {
    "]": "[",
    "}": "{",
    ")": "(",
  }
  const isClosingCharacter = c => ["}", "]", ")"].includes(c)

  const stack = new Stack()

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (isClosingCharacter(char)) {
      const openingCharacter = openingMap[char]

      if (stack.size() === 0 || openingCharacter !== stack.peek()) return false

      stack.pop()
      continue
    }

    stack.push(char)
  }

  return stack.size() === 0
}

module.exports = {
  isValid,
}
