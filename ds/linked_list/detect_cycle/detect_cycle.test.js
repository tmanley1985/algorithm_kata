

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Detect A Cycle', () => {
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

                const listWithCycle = LLNode(1)
                const secondNode = LLNode(2)
                listWithCycle.next = secondNode
                secondNode.next = LLNode(3)
                secondNode.next.next = LLNode(4)
                secondNode.next.next.next = secondNode

                const listWithoutCycle = LLNode(1, LLNode(2, LLNode(3)))
                
                expect(algorithmFunction(listWithCycle)).toBe(true);
                expect(algorithmFunction(listWithoutCycle)).toBe(false);
                
            });
        });
    });
});
