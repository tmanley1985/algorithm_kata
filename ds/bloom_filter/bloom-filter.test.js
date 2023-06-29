

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Bloom Filter', () => {
    const kataFolderPath = path.join(__dirname, 'kata');

    // Get the list of dated files within the kata folder
    const datedFiles = fs.readdirSync(kataFolderPath);

    // Import and test each dated file
    datedFiles.forEach((fileName) => {
        const filePath = path.join(kataFolderPath, fileName);
        const module = require(filePath);

        // Iterate over the exported functions from the module
        Object.entries(module).forEach(([functionName, algorithmFunction]) => {

            // Define your test cases for each function from each dated file
            it(`Test ${functionName} from ${fileName}`, () => {

                const hashFunction1 = item => {
                    let hash = 0;
                    for (let i = 0; i < item.length; i++) {
                      hash += item.charCodeAt(i);
                    }
                    return hash;
                  };
                  
                  const hashFunction2 = item => {
                    let hash = 0;
                    for (let i = 0; i < item.length; i++) {
                      hash += item.charCodeAt(i) * (i + 1);
                    }
                    return hash;
                  };
                  
                
                const bloomFilter = new algorithmFunction(10, [hashFunction1, hashFunction2])

                bloomFilter.add("apple");
                bloomFilter.add("banana");
                bloomFilter.add("cherry");

                expect(bloomFilter.mightContain("apple")).toBe(true); // true
                expect(bloomFilter.mightContain("banana")).toBe(true); // true
                expect(bloomFilter.mightContain("cherry")).toBe(true); // true
                expect(bloomFilter.mightContain("orange")).toBe(false) // false

                
            });
        });
    });
});
