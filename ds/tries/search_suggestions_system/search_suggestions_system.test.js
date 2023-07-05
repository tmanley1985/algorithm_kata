const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

// https://leetcode.com/problems/search-suggestions-system
describe('Search Suggestions System Test', () => {
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
                    {args: [["mobile","mouse","moneypot","monitor","mousepad"], "mouse"], expected: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]] },
                    {args: [["havana"], "havana"], expected: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]},
                ]

                for (const {args, expected} of testCases) {

                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                

            });
        });
    });
});
