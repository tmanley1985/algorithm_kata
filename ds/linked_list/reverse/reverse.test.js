

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Reversing A Linked List', () => {
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

                const LLNode = (data, next = null) => ({
                    data, next
                })

                const LL = LLNode(1, LLNode(2, LLNode(3)))
                const expected = LLNode(3, LLNode(2, LLNode(1)))
                
                
                const actual = algorithmFunction(LL)

                expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
                
            });
        });
    });
});
