const solve = (str, k) => {
  const letterFrequencies = {}
  let windowStart = 0
  let maxSubstring = 0

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const letter = str[windowEnd]

    if (!(letter in letterFrequencies)) {
      letterFrequencies[letter] = 0
    }

    letterFrequencies[letter]++

    while (Object.keys(letterFrequencies).length > k) {
      const windowStartCharacter = str[windowStart]

      letterFrequencies[windowStartCharacter]--

      if (letterFrequencies[windowStartCharacter] === 0) {
        delete letterFrequencies[windowStartCharacter]
      }
      windowStart++
    }

    maxSubstring = Math.max(maxSubstring, windowEnd - windowStart + 1)
  }

  return maxSubstring
}
