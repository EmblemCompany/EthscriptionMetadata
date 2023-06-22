const fs = require('fs')

if (process.argv[2] == "test") {
    let baseFolder = process.argv[3]
    const files = fs.readdirSync(baseFolder);
    files.forEach((filePath, index) => {
        if (!isValid(baseFolder + filePath)) {
            console.log("FAILED")
            process.exit(1)
        }
        console.log('testing file: ' + filePath, index)
        if (files.length === index + 1) {
            console.log('done')
        }
    })
}

function isValid(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const jsonObject = JSON.parse(fileContent)
        return Array.isArray(jsonObject) ? jsonObject : [jsonObject]

    } catch (error) {
        console.error(`Error parsing file ${filePath}: ${error.message}`)
        return null
    }
}

module.exports = { isValid }
