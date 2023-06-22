

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('IP Addresses', () => {
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
                    {args: ["25525511135"], expected: ["255.255.11.135","255.255.111.35"] },
                    {args: ["0000"], expected: ["0.0.0.0"] },
                    {args: ["101023"], expected: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"] },
                ]


                for (const {args, expected} of testCases) {

                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
