
// https://www.youtube.com/watch?v=BgK4IDBEXro&ab_channel=Coderbyte

const solve = (str, k) => {

    const letterFrequencies = {}

    let windowStart = 0
    let maxSubstring = 0

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let letter = str[windowEnd]


        if (! (letter in letterFrequencies)) {
            letterFrequencies[letter] = 0
        }

        letterFrequencies[letter]++


        // We need to shrink the window if we have more letters than specified.
        // This shrinks the window until we have the specified amount of distinct letters.
        while (Object.keys(letterFrequencies).length > k) {
            let windowStartChar = str[windowStart]
            letterFrequencies[windowStartChar]--

            if (letterFrequencies[windowStartChar] === 0) {
                delete letterFrequencies[windowStartChar]
            }

            windowStart++
        }

        // Remember: The difference between the windowEnd and the windowStart
        // IS the window size!
        maxSubstring = Math.max(maxSubstring, windowEnd - windowStart + 1)
    }

    return maxSubstring
}

const log = console.log

log(solve("acccpbbebi", 3)) // 6
log(solve("aaaabbcccd", 1)) // 4
log(solve("abcdefg", 10)) // 7