

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Two Sum II', () => {
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

                const testCases = [
                    {args: [[1, 3, 4, 5, 7, 10, 11], 9 ], expected: [3,4] },
                    {args: [[1,2,3,4,5], 8 ], expected: [3,5] }
                ]

                for (const {args, expected} of testCases) {
                    
                    // [2,3] becomes [3,4] because of 1 based indexing.
                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
