# main-fns

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/nabby27/main-fns/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/main-fns.svg?style=flat&label=version)](https://www.npmjs.com/package/main-fns)
[![Build Status](https://img.shields.io/github/workflow/status/nabby27/main-fns/Test%20lint%20and%20deploy/main?label=test)](https://github.com/nabby27/main-fns/actions?query=workflow%3A%22Test+lint+and+deploy%22)
[![Codecov branch](https://img.shields.io/codecov/c/github/nabby27/main-fns/main)](https://codecov.io/gh/nabby27/main-fns/branch/main)
![tree shaking](https://badgen.net/bundlephobia/tree-shaking/main-fns/)
![minzip](https://badgen.net/bundlephobia/minzip/main-fns)
![npm](https://img.shields.io/npm/dw/main-fns)
[![PayPal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=M57SG9J5RQ6DJ&currency_code=EUR&source=url)

Javascript utility library created with TypeScript

## Documentation
Feel free to investigate the [main-fns documentation](https://nabby27.github.io/main-fns/), it is structured by modules and created using JSDoc.

## Why main-fns?
It is quite tedious to be aware of all the dependencies and keep their changes. The idea of main-fns is that you only worry about this library. Main-fns will have all the main functions that are used in a common way such as the handling of dates, texts, arrays, numbers... Internally main-fns will use the best implementation of the moment and it will be updated for you.

## Installation

Using npm:

```sh
npm i main-fns
```

## Some examples

```ts
import { addDays, camelCase, max } from 'main-fns'

addDays(1, new Date(1996, 5, 26)) // new Date(1996, 5, 27)

camelCase('hello world') // helloWorld

max(3, 4, 5, 2) // 5
```

## How to contribute?

See de [CONTRIBUTING](./.github/CONTRIBUTING.md) page

## What changes does it have?

Detailed changes for each release are documented in the [CHANGELOG](./CHANGELOG.md) page or in [release notes](https://github.com/nabby27/main-fns/releases).

## License

See de [LICENSE](./LICENSE) page