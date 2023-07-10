

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

// This problem doesn't exist on leetcode but basically says that
// every opening tag has to have a closing tag and that the tag name must
// be capitalized. Also the tag name cannot be more than three characters.
describe('Valid Tags', () => {
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
                    // Simple case
                    {args: ["<A></A>"], expected: true },
                    // Simple nested tags
                    {args: ["<A><B></B></A>"], expected: true },
                    // Lowercase Tags
                    {args: ["<A><b></b></A>"], expected: false },
                    // Unclosed tags
                    {args: ["<A><B></A>"], expected: false },
                    // Closing tag doesn't match up
                    {args: ["<A><B></B></D>"], expected: false },
                    // content outside of tags
                    {args: ["content<A></A>"], expected: false },
                    // Tag more than three characters
                    {args: ["<ABCD></ABCD>"], expected: false },
                    
                ]


                for (const {args, expected} of testCases) {
                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
