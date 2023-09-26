import { describe, expect, it } from 'vitest'
import { getTypeName } from './base'

describe('base.ts', () => {
  it.each([
    ['', 'string'],
    [1, 'number'],
    [{}, 'object'],
    [[], 'array'],
    [new Date(), 'date'],
    [[1, 2, 3], 'array'],
    [new Set([1, 2, 3]), 'set'],
    [new Map([[1, 2], [3, 4]]), 'map'],
    [new WeakSet(), 'weakset'],
    [new WeakMap(), 'weakmap'],
    [new Promise((resolve) => { resolve(1) }), 'promise'],
    [new Error('error'), 'error'],
    [Symbol('symbol'), 'symbol'],
    [null, 'null'],
    [undefined, 'undefined'],
    [Number.NaN, 'number'],
    [Number.POSITIVE_INFINITY, 'number'],
    [Date.now(), 'number'],
  ])('%s => %s', (input, expected) => {
    expect(getTypeName(input)).toEqual(expected)
  })
})
