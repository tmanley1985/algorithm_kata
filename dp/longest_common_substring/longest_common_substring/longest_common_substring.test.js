

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Longest Common Substring', () => {
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
                    {args: ["abcdefg", "xyz" ], expected: 0 },
                    {args: ["abcdefg", "xyzaghi" ], expected: 1 },
                    {args: ["abcdefg", "xyzabcklmefg" ], expected: 3 },
                    {args: ["abcdefg", "xyzabcdefghi" ], expected: 7 },
                ]

                for (const {args, expected} of testCases) {
                    
                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
