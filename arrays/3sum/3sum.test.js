

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Three Sum', () => {
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
                    {args: [[3,7,1,2,8,4,5]], expected: [] },
                    {args: [[0,0,0] ], expected: [[0,0,0]] },
                    {args: [[-1,0,1,2,-1,-4] ], expected: [[-1,-1,2],[-1,0,1]] },
                ]


                for (const {args, expected} of testCases) {
                    
                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
