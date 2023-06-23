

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');
const exp = require('constants');

describe('LRU Cache', () => {
    const kataFolderPath = path.join(__dirname, 'kata');

    // Get the list of dated files within the kata folder
    const datedFiles = fs.readdirSync(kataFolderPath);

    // Import and test each dated file
    datedFiles.forEach((fileName) => {
        const filePath = path.join(kataFolderPath, fileName);
        const module = require(filePath);

        // Iterate over the exported functions from the module
        Object.entries(module).forEach(([functionName, LRUCache]) => {

            // Define your test cases for each function from each dated file
            it(`Test ${functionName} from ${fileName}`, () => {

                expect(true).toBe(true)
                cache= new LRUCache(2);

                cache.put(1, 1) // cache is {1=1}
                expect(cache.map[1].value).toBe(1)

                cache.put(2, 2) // cache is {1=1, 2=2}
                expect(cache.map[1].value).toBe(1)
                expect(cache.map[2].value).toBe(2)

                let result = cache.get(1)   // return 1
                expect(result).toBe(1)

                cache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
                expect(cache.map[1].value).toBe(1)
                expect(cache.map[2]).toBe(undefined)
                expect(cache.map[3].value).toBe(3)
    
                let result2 = cache.get(2)    // returns -1 (not found)
                expect(result2).toBe(-1)

                cache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
                expect(cache.map[1]).toBe(undefined)
                expect(cache.map[3].value).toBe(3)
                expect(cache.map[4].value).toBe(4)

                let result3 = cache.get(1)    // return -1 (not found)
                expect(result3).toBe(-1)

                let result4 = cache.get(3)    // return 3
                expect(result4).toBe(3)

                let result5 = cache.get(4)    // return 4
                expect(result5).toBe(4)
                
            });
        });
    });
});
