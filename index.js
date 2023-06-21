// Import the filesystem module
const fs = require('fs');

// Import the JSON file
let rawdata = fs.readFileSync('ethscriptions.json');

// Parse the JSON file
let metadata = JSON.parse(rawdata);

// Export the metadata as a property called EtherscriptionMetadata
module.exports = {
    EtherscriptionMetadata: metadata
}
