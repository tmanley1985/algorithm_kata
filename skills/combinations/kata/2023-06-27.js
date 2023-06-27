const combinations = (elements, i = 0) => {
  if (i === elements.length) return [[]]

  const combosExcludingHead = combinations(elements, i + 1)
  const head = elements[i]

  const combosIncludingHead = combosExcludingHead.map(combo =>
    combo.concat(head)
  )

  return [...combosExcludingHead, ...combosIncludingHead]
}

module.exports = {
  combinations,
}
