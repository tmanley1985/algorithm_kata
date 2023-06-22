

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Longest Palindromic Subsequence', () => {
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
                    {args: ["mom"], expected: 3 },
                    {args: ["mpom"], expected: 3 },
                    {args: ["agbdba"], expected: 5 },
                ]

                for (const {args, expected} of testCases) {

                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
