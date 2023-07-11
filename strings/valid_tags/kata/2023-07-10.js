const isValid = code => {
  const stack = []

  let i = 0

  // We're going to use a while loop because we need to determine when the pointer moves
  // as we will grab the tag name and move the pointer past the closing tag.
  while (i < code.length) {
    if (code[i] === "<") {
      let closingTagIndex = code.indexOf(">", i)

      // If there's no closing tag from where we are in the string,
      // then we have an unclosed tag somewhere or we have content
      // outside of the string right?
      if (closingTagIndex === -1) return false

      // In the case that we spot this scenario: '</' then we know we're likely
      // in a closing tag.
      if (code[i + 1] === "/") {
        // We have to get the tag name by getting everything in between the '</' and '>'.
        let tag = code.substring(i + 2, closingTagIndex)

        // If there isn't anything on the stack or if there is but it doesn't match our tag,
        // then we have mismatched tags.
        if (!stack.length || stack[stack.length - 1] !== tag) return false

        // Once we've passed this place we can pop this off the stack as we've gotten a match
        // for our opening tag.
        stack.pop()
      } else {
        // In this scenario: '<TAG>' we have an opening tag.
        let tag = code.substring(i + 1, closingTagIndex)

        // If we have <> (i + 1) OR <AAAA> (greater than 3 characters) OR '<aa>' (lowercase letters) return false
        if (
          closingTagIndex === i + 1 ||
          closingTagIndex > i + 4 ||
          !/^[A-Z]+$/.test(tag)
        )
          return false

        // In the case of an opening tag, we should push it onto the stack!
        stack.push(tag)
      }

      // No matter what happens, if we are on an opening angle bracket, we should
      // move i up to just past the closing character to move through the string.
      i = closingTagIndex + 1
    } else {
      // If we're on a character that isn't an opening character,
      // we're just going to continue through the string, unless
      // the stack is empty which means that there isn't a tag on the stack.
      if (!stack.length) return false

      i++
    }
  }
  return stack.length === 0
}

module.exports = {
  isValid,
}
