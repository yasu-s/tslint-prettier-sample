# 概要

* tslint-plugin-prettier を使用してコードフォーマットを実行するサンプルです。
* Visual Studio Code と TSLint拡張機能を使用することでファイル保存時に自動フォーマットができます。

# 実行環境

* Node.js - 10.x
* Yarn - 1.13.x
* Visual Studio Code - 1.31.x
  * [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) - 1.0.0

# 使用ライブラリ

* TypeScript - 3.2.x
* TSLint - 5.11.x
* prettier - 1.16.x
* tslint-plugin-prettier - 2.0.x
* tslint-config-prettier - 1.18.x

# 動作確認

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/tslint-prettier-sample.git
```

## 2. パッケージインストール  

```
cd tslint-prettier-sample
yarn
```

## 3. サンプルの起動  

```
yarn lint:fix
```

## 4. VSCodeの実行結果

![tslint](https://user-images.githubusercontent.com/2668146/52909016-1e02f580-32c4-11e9-954d-c4bd33c39635.gif)

# 各種設定

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
