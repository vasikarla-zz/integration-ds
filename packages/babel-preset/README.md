# @integration-ds/babel-preset

Automatically load the css for the @integration-ds design system.

## Installation

```sh
npm i --save-dev @integration-ds/babel-preset
# or
yarn add -D @integration-ds/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@integration-ds/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@integration-ds/card';
```

Output:

```js
import Card from '@integration-ds/card';
import '@integration-ds/card/dist/main.css';
```
