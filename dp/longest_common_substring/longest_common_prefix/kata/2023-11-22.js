const LCPNaive = words => {
  // Lets assume the current word is the common prefix
  let prefix = words[0]

  // Let's iterate over the rest of the words.
  for (let i = 1; i < words.length; i++) {
    const word = words[i]

    // While the current word does NOT start with the prefix,
    // decrement the prefix by one letter.

    while (!word.startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1)

      // If the prefix ever hits an empty string, that means there wasn't a common
      // prefix for the current word. And if there isn't a prefix for the current word
      // then there cannot be a common prefix at all between ANY of the words!
      if (prefix === "") return ""
    }
  }

  return prefix
}

const a = b => {
  return 1
}

module.exports = {
  LCPNaive,
}
