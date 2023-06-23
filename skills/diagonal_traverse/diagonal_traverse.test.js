

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Diagonal Traverse', () => {
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

                const functionToExpectedResult = {
                    traverseDiagonallyLeftUp: [
                        [1,1,1,1,0],
                        [1,1,1,0,0],
                        [1,1,0,0,0],
                        [1,0,0,0,0],
                        [0,0,0,0,0],
                    ],
                    traverseDiagonallyRightUp: [
                        [0,1,1,1,1],
                        [0,0,1,1,1],
                        [0,0,0,1,1],
                        [0,0,0,0,1],
                        [0,0,0,0,0],
                    ],
                    traverseDiagonalOnly: [
                        [1,0,0,0,0],
                        [0,1,0,0,0],
                        [0,0,1,0,0],
                        [0,0,0,1,0],
                        [0,0,0,0,1],
                    ]
                }
                const matrix = Array.from({ length: 5 }).map(_ => Array.from({ length: 5 }).fill(0))

                for (const name in functionToExpectedResult) {
                    
                    if (functionName === name) {
                        expect(algorithmFunction(JSON.parse(JSON.stringify(matrix)))).toEqual(functionToExpectedResult[name])
                    }
                    
                }
            });
        });
    });
});
