// https://leetcode.com/problems/restore-ip-addresses/description/

const restoreIPAddresses = str => {

    let results = []

    if (str.length > 12) return results

    const dfs = (i, dots, candidateIP) => {

        // You could have more than four dots because of the branching logic right?
        // You have to try every possibility.

        // Also, if the current index is equal to the length of the string
        // that really means you've use every character in the string.
        if (dots === 4 && i === str.length) {

            // Because we'll have four dots in the string, we have to remove it.
            // example: "0.0.0.0."
            results.push(candidateIP.substring(0, candidateIP.length - 1))
            return
        }

        if (dots > 4) return

        // We're only ever going to have up to three decisions or children.
        // The Math.min is basically just so I don't have to account for out of bounds situations.
        for (let j = i; j < Math.min(i + 3, str.length); j++) {
            let octet = str.substring(i, j + 1)
            
            let doesNotContainLeadingZeros = (i === j || str[i] !== "0")

            if (parseInt(octet) <= 255 && doesNotContainLeadingZeros) {
                dfs(j + 1, dots + 1, `${candidateIP}${octet}.` )
            }
        }

    }

    dfs(0, 0, "")

    return results
}

const log = console.log

log("Using outside array")
log(restoreIPAddresses("25525511135")) // ["255.255.11.135","255.255.111.35"]
log(restoreIPAddresses("0000")) // ["0.0.0.0"]
log(restoreIPAddresses("101023")) // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
