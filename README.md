# main-fns

[![Version](https://img.shields.io/npm/v/main-fns.svg?style=flat&label=version)](https://www.npmjs.com/package/main-fns)
[![Build Status](https://img.shields.io/github/workflow/status/nabby27/main-fns/Test%20lint%20and%20deploy/main?label=test)](https://github.com/nabby27/main-fns/actions?query=workflow%3A%22Test+lint+and+deploy%22)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/nabby27/main-fns/blob/main/LICENSE)
![npm](https://img.shields.io/npm/dw/main-fns)
[![PayPal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=M57SG9J5RQ6DJ&currency_code=EUR&source=url)

Javascript utility library created with TypeScript

Documentation on [https://nabby27.github.io/main-fns/](https://nabby27.github.io/main-fns/)

## Why main-fns?
It is quite tedious to be aware of all the dependencies and keep their changes. The idea of main-fns is that you only worry about this library. Main-fns will have all the main functions that are used in a common way such as the handling of dates, texts, arrays, numbers... Internally main-fns will use the most current libraries of the moment and it will be updated for you.

## Installation

Using npm:

```sh
npm i main-fns
```

## Some examples

```ts
import { addDays, dateToString } from 'main-fns'

addDays(1, new Date(1996, 5, 26)) // new Date(1996, 5, 27)

dateToString('yyyy-MM-dd', new Date(1996, 5, 27)) // '1996-06-27'
```

Feel free to investigate the [main-fns API](https://nabby27.github.io/main-fns/), it is structured by modules and created using JSDoc.

## How to contribute

See de [CONTRIBUTING](./.github/CONTRIBUTING.md) page