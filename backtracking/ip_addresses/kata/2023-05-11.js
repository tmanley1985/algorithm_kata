
const restoreIPAddresses = str => {

    const results = []

    const dfs = (i = 0, dots = 0, currentIP = "") => {

        if (dots === 4 && i === str.length) {
            results.push(currentIP.substring(0, currentIP.length - 1))
            return
        }

        for (let j = i; j < Math.min( i + 3, str.length); j++) {
            const octet = str.substring(i, j + 1)

            const doesNotContainLeadingZeros = i === j || octet[0] !== '0'

            if (doesNotContainLeadingZeros && octet < 256) {

                dfs(j + 1, dots + 1, `${currentIP}${octet}.`)
            }
        }
    }

    dfs()

    return results
}

const log = console.log

log("Using outside array")
log(restoreIPAddresses("25525511135")) // ["255.255.11.135","255.255.111.35"]
log(restoreIPAddresses("0000")) // ["0.0.0.0"]
log(restoreIPAddresses("101023")) // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
