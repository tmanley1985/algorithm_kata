// For a list of N things, there should be 2 ^ N combinations because
// each choice is binary (to keep the current element or not)
// in a combination the order doesn't matter, so AB === BA.

// https://www.youtube.com/watch?v=NA2Oj9xqaZQ&list=PLxQ8cCJ6LyObv8vjQD443c-1JEqlhCCXe&index=4&t=64s&ab_channel=Coderbyte

const combinations = (elements, i = 0) => {

    if (i === elements.length) return [ [] ]

    // Think about what is happening here.
    // We traverse to the end and get out of bounds, so we return [ [] ]
    // Then we have c, and we want to basically return [ [], [c] ]
    // that represents the decision to keep it and not keep it.
    // Then we're at b with [ [], [c] ], so we keep that and we return [ [], [c], [b], [bc]]
    // see the pattern?
    const combosWithoutFirst = combinations(elements, i + 1)

    const first = elements[i]

    const combosWithFirst = combosWithoutFirst.map(combo => combo.concat(elements[i]))

    return [...combosWithoutFirst, ...combosWithFirst]
   
}

const log = console.log

log(combinations("abc".split("")))