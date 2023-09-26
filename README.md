# @bf/utils

[![NPM version](https://img.shields.io/npm/v/@gibf/utils?color=a1b858&label=)](https://www.npmjs.com/package/@bf/utils)
[![Docs](https://www.paka.dev/badges/v0/cute.svg)](https://www.paka.dev/npm/@gibf/utils)

Opinionated collection of common JavaScript / TypeScript utils by [@BF](https://github.com/bf-zh).

- Tree-shakable ESM
- Fully typed - with TSDocs
- Type utilities - `Arrayable<T>`, `ElementOf<T>`, etc.

> This package is designed to be used as `devDependencies` and bundled into your dist.

## Install
```bash
npm install @bf/utils
```

## Usage

```ts
import {isString, isNumber, isBoolean, isObject, isFunction } from '@bf/utils';

isString('1') // true
```
