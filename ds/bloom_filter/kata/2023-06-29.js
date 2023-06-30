class BloomFilter {
  constructor(size, hashFunctions) {
    this.size = size
    // Why have multiple hash functions?
    // 1. Reduce collisions
    // 2. Reduce chance for false positives
    this.hashFunctions = hashFunctions
    this.bitArray = Array.from({ length: size }).fill(false)
  }

  add(item) {
    // This gives you all of the indices where this item could potentially be
    // in your bloom filter.
    const indices = this.getIndices(item)

    indices.forEach(index => {
      this.bitArray[index] = true
    })
  }

  // For us to say that this may contain the item,
  // we have to say that when hashed through our hashing algorithms
  // that for each index, we have to get a true in the bit array for that index.
  mightContain(item) {
    return this.getIndices(item).every(index => this.bitArray[index])
  }

  getIndices(item) {
    return this.hashFunctions.map(hashFn => hashFn(item) % this.size)
  }
}

module.exports = {
  BloomFilter,
}
