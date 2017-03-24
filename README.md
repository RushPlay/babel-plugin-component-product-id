# `@rushplay/babel-preset-react`

React-related transforms for @RushPlay needs.


## Installation

```
yarn add @rushplay/babel-preset-react
```


## Usage

Add to presets in your `.babelrc` (or use any other method to define presets list) before `react` preset:

```json
{
  "presets": [
    "@rushplay/react",
    "react"
  ]
}
```


## Options

### `productIdSource`

- Type: `String`
- Default: `process.env.PRODUCT_ID`

Define variable to be used as source of product ID.

```json
{
  "presets": [
    ["@rushplay/react", { "productIdSource": "__SKIN__" }],
    "react"
  ]
}
```
