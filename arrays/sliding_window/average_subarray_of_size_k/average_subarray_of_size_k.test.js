

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Average Sub Array Of Size K', () => {
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
                    {args: [[1,2,3,4,5], 3 ], expected: [2,3,4] },
                    {args: [[1,3,2,6,-1,4,1,8,2], 5 ], expected: [2.2, 2.8, 2.4, 3.6, 2.8] }
                ]

                for (const {args, expected} of testCases) {
                    
                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
