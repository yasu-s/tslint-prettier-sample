# Overview

* A sample that executes the code format using tslint-plugin-prettier.
* By using Visual Studio Code and TSLint extensions, automatic formatting can be done when saving files.

# System requirements

* Node.js - 10.x
* Yarn - 1.13.x
* Visual Studio Code - 1.31.x
  * [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) - 1.0.0

# Used library

* TypeScript - 3.2.x
* TSLint - 5.11.x
* prettier - 1.16.x
* tslint-plugin-prettier - 2.0.x
* tslint-config-prettier - 1.18.x

# Operation check

## 1. Download Sample

```
git clone git@github.com:yasu-s/tslint-prettier-sample.git
```

## 2. Installing packages  

```
cd tslint-prettier-sample
yarn
```

## 3. Launch sample application  

```
yarn lint:fix
```

## 4. Execution result of VSCode

![tslint](https://user-images.githubusercontent.com/2668146/52909016-1e02f580-32c4-11e9-954d-c4bd33c39635.gif)

# Various settings

## .vscode/settings/json

```json
{
  "tslint.configFile": "tslint.json",
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  }
}
```

## tslint.json

```json
{
  "rulesDirectory": [
    "tslint-plugin-prettier"
  ],
  "extends": [
    "tslint:latest",
    "tslint-config-prettier"
  ],
  "rules": {
    "prettier": [
      true, {
        "printWidth": 140,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": true,
        "arrowParens": "always"
      }
    ]
  }
}
```
