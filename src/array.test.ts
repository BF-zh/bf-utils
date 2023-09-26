import { describe, expect, it } from 'vitest'
import { toArray,flattenArrayable, mergeArrayable, partition } from './array'

describe('toArray', () => {
  it.each([
    [undefined, []],
    [null, []],
    [false, [false]],
    [0, [0]],
    ['', ['']],
    [[], []],
    ['foo', ['foo']],
    [['foo'], ['foo']],
  ])('%o => %o', (input, expected) => {
    expect(toArray(input)).toEqual(expected)
  })
})

describe('flattenArrayable',()=>{
  it.each([
    [undefined, []],
    [null, []],
    [false, [false]],
    [0, [0]],
    ['', ['']],
    [[], []],
    ['foo', ['foo']],
    [['foo'], ['foo']],
    [[[['foo']]],[['foo']]]
  ])("%o=>%o",(input,expected)=>{
    expect(flattenArrayable(input)).toEqual(expected)
  })
})

describe('mergeArrayable',()=>{
  it.each([
    [[1,2,3],[1,2,3]]
  ])('%o=>%o',(input,expected)=>{
    expect(mergeArrayable(...input)).toEqual(expected)
  })
})
describe('partition',()=>{
  it.each([
    [[1,2,3,4],[(e:number)=>e%2],[[1,3],[2,4]]],
    [[1,2,3,4],[(e:number)=>e%2,(e:number[],i:number)=>false],[[1,3],[],[2,4]]]
  ])('(%o,...[%o])=>%o',(input,fn,expected)=>{
    // @ts-ignore
    expect(partition(input,...fn)).toEqual(expected)
  })
})
