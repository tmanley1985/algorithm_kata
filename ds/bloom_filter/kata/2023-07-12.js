class BloomFilter {
  constructor(size, hashFunctions) {
    this.size = size
    this.hashFunctions = hashFunctions
    this.bitArray = Array.from({ length: size }).fill(false)
  }

  add(item) {
    this.getIndices(item).forEach(index => {
      this.bitArray[index] = true
    })
  }
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
