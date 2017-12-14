# ESDoc Named Import Plugin

This plugin turns basic import statements used in the generated documentation for classes into named imports.

Before:
```js
import ClassName from 'package-name/path-to-class-name/ClassName';
```

After:
```js
import {ClassName} from 'package-name';
```

## Install

```bash
npm install esdoc-named-import-plugin
```

or 

```bash
yarn add esdoc-named-import-plugin
```

## Config
```json
{
	"source": "./src",
	"destination": "./doc",
	"plugins": [
		{
			"name": "esdoc-named-import-plugin"
		}
	]
}
```
