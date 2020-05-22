# touch-icon-utils-async
Generate icons to all commonly accepted sizes and generate a proper HTML snippet. Inspired [this article](https://mathiasbynens.be/notes/touch-icons) by Mathias Bynens.

## Installation

```
npm install touch-icon-utils-async
yarn add touch-icon-utils-async
```

## Generate icons
Properly generate resized icons needed from a given image. The image must be at least 192x192.

```javascript
    const { iconsGenerator } = require("touch-icon-utils-async");
    await iconsGenerator("path-to-source-image.png", "target-dir", [settings]);
```

or

```javascript
    const { iconsGenerator } = require("touch-icon-utils-async");
    iconsGenerator("path-to-source-image.png", "target-dir", [settings]).then(() => {
        console.log('finished creating app-icons);
    });
```

## Generate HTML snippet
Render an HTML snippet for the icons you have just rendered (see above).

```javascript
    const { htmlSnippetGenerator } = require("touch-icon-utils-async");
    htmlSnippetGenerator([settings]);
```

## Settings
Passing settings is optional, default options are:
```json
{
    "appleSizes": [180, 152, 144, 120, 114, 76, 72],
    "precomposed": true,
    "urlBase": "/"
}
```
Note: Icons for sizes 57x57 and 192x192 are always rendered and don't need to be provided in `appleSizes`

## Licence
MIT © [Zimmo](https://zimmo.be) and contributors
