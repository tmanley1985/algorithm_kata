

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('BFS Level Order', () => {
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


                const BNode = (data, left = null, right = null) => ({
                    data, left, right
                })

                // The tree has three levels.
                //     1
                //   /   \
                //  2     3
                // /       \
                //4         5

                const tree = BNode(1, BNode(2, BNode(4)), BNode(3, BNode(5)))
                const testCases = [
                    {args: [tree], expected: [[1], [2,3], [4,5]] },
                ]

                for (const {args, expected} of testCases) {

                    expect(algorithmFunction(...args)).toEqual(expected)
                }
                
            });
        });
    });
});
