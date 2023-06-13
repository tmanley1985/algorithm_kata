

const fs = require('fs');
const path = require('path');
const { expect } = require('expect');

describe('Edit Distance', () => {
    const kataFolderPath = path.join(__dirname, 'kata');

    // Get the list of dated files within the kata folder
    const datedFiles = fs.readdirSync(kataFolderPath);

    // Import and test each dated file
    datedFiles.forEach((fileName) => {
        const filePath = path.join(kataFolderPath, fileName);
        const module = require(filePath);

        Object.entries(module).forEach(([functionName, algorithmFunction]) => {

            it(`Test ${functionName} from ${fileName}`, () => {

                expect(algorithmFunction("horse", "ros")).toBe(3)
                expect(algorithmFunction("intention", "execution")).toBe(5)
                
            });
        });
    });
});
