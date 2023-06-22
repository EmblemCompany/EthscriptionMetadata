# EthscriptionMetadata

## Install 

```bash
npm install ethscriptionmetadata
```

## Add to App

```javascript
import {EtherscriptionMetadata} from 'ethscriptionmetadata'
```

## Add your collection

`Using the template below, add your information to a new .json file and place it in the projects folder. `

## Template

```json
{
    "name": "Demo Collection",
    "inscription_icon": "0x79bcb986039f9d114754570835000d81980ccf0d3834744aac4445112f05aa4a",
    "supply": "100",
    "slug": "demo-collection",
    "description": "A set of 100 distinct art pieces residing on the Ethereum Blockchain",
    "twitter_link": "https://twitter.com/demo",
    "discord_link": "https://discord.gg/",
    "website_link": "",
    "background_color": "#C3FF02",
    "inscriptions": [
      {
        "id": "0x79bcb986039f9d114754570835000d81980ccf0d3834744aac4445112f05aa4a",
        "meta": {
          "name": "Demo Collection #1",
          "attributes": [
            {
              "trait_type": "collection",
              "value": "Demo Collection"
            }
          ]
        },
        "number": "1"
      }
    ]
}
```


