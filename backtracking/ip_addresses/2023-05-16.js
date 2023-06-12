
const restoreIPAddresses = s => {

    const result = []

    const dfs = (i = 0, dots = 0, currentIP = "") => {

        if (dots === 4 && i === s.length) {
            result.push(currentIP.substring(0, currentIP.length - 1))
            return
        }


        for (let j = i; j < Math.min(i + 3, s.length); j++) {
            
            const octet = s.substring(i, j + 1)

            const withinRange = octet < 256
            const doesNotContainLeadingZeros = i === j || octet[0] > 0

            if (withinRange && doesNotContainLeadingZeros) {
                dfs(j + 1, dots + 1, `${currentIP}${octet}.`)
            }
            
        }
    }

    dfs()
    return result

}

const log = console.log

log("Using outside array")
log(restoreIPAddresses("25525511135")) // ["255.255.11.135","255.255.111.35"]
log(restoreIPAddresses("0000")) // ["0.0.0.0"]
log(restoreIPAddresses("101023")) // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
