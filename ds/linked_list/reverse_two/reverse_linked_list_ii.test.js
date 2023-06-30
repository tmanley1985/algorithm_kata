

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Reverse Linked List II', () => {
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
                
                const LL = LLNode(1, LLNode(2, LLNode(3, LLNode(4, LLNode(5)))))

                const expected = LLNode(5, LLNode(4, LLNode(3, LLNode(2, LLNode(1)))))

                const actual = algorithmFunction(LL, 2, 4)

                // Remember, we aren't reversing the entire linked list
                // only the nodes and everything in between.
                //TODO: The act of finding the indexes in a linked list is a technique
                // I need a kata for.
                expect(actual.data).toEqual(1)
                expect(actual.next.data).toEqual(4)
                expect(actual.next.next.data).toEqual(3)
                expect(actual.next.next.next.data).toEqual(2)
                expect(actual.next.next.next.next.data).toEqual(5)
                expect(actual.next.next.next.next.next).toEqual(null)
                
            });
        });
    });
});
