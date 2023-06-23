

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Min Size Subarray Sum', () => {
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
                    {args: [[1,4,5,7], 100], expected: 0 },
                    {args: [[2,1,5,2,8], 7], expected: 1 }, // (because 8 is greater than)
                    {args: [[3, 2, 7, 10, 4, 1, 9, 8], 15], expected: 2 },
                ]

                for (const {args, expected} of testCases) {

                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
