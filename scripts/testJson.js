const fs = require('fs');

function isValid(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const jsonObject = JSON.parse(fileContent);

        // Here you can add additional validation logic
        // if required, for now it only checks if it's valid JSON

        // If the file is an array, return it, else wrap it in an array
        return Array.isArray(jsonObject) ? jsonObject : [jsonObject];

    } catch (error) {
        console.error(`Error parsing file ${filePath}: ${error.message}`);
        return null;
    }
}

module.exports = { isValid };
