const fibTab = n => {
  // Of course, if we're trying to get N, arrays are zero based indexed.
  // That bites me every time.
  const table = Array.from({ length: n + 1 }).fill(0)

  table[1] = 1

  for (let i = 2; i < table.length; i++) {
    table[i] = table[i - 1] + table[i - 2]
  }

  return table[n]
}

module.exports = {
  fibTab,
}
