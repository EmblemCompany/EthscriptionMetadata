const fs = require('fs');
const path = require('path');
const test = require('./testJson.js');

const folderPath = './projects'; // specify your json folder path
const outputPath = './build/metadata.json';

const metadata = [];

const files = fs.readdirSync(folderPath);
files.forEach((file, index) => {
    const filePath = path.join(folderPath, file);

    const jsonArray = test.isValid(filePath);

    if (jsonArray) {
        jsonArray.forEach(item => {
            item.inscriptions.forEach(inscription => {
                let collectionTrait = inscription.meta? inscription.meta.attributes.filter(item=>{return item.trait_type == "collection"}): []
                if (!inscription.data && !collectionTrait.length) {
                    inscription.meta.attributes.push({trait_type: "collection", value: item.name})
                }
            })
            metadata.push(item)}
        )

        if (files.length === index + 1) {
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
            console.log('metadata.json has been created.');
        }
    }
});
