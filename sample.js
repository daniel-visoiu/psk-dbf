const BloomFilter = require("./src/bloom-filter");

const bloomFilter = new BloomFilter({ estimatedElementCount: 1, cryptoHashFunctionCount: 1 });
bloomFilter.insert("05290931025615");

// Testing serialization
const serialisation = bloomFilter.bloomFilterSerialisation();

// Creating bloom filter clone via serialization
const bloomFilterClone = new BloomFilter(serialisation);

console.log('exists 05290931025615? ', bloomFilterClone.test("05290931025615"));
console.log('exists 05290931025611? ', bloomFilterClone.test("05290931025611"));

// console.log(bloomFilter.bitCollectionStrategy.buffer);
// console.log(new TextEncoder().encode(bloomFilter.bitCollectionStrategy.buffer));
// console.log(bloomFilter.bitCollectionStrategy.unit8);

// console.log(new TextEncoder().encode(bloomFilterClone.bitCollectionStrategy.buffer));
// console.log(bloomFilterClone.bitCollectionStrategy.unit8);
