import { describe, expect, it } from 'vitest'
import { isDate, isDef, isObject, isRegExp, isString, isUndefined } from './is';
describe('Is',()=>{
  it.each([
    [isDef,'',true] ,
    [isDef,1,true] ,
    [isDef,undefined,false],
    [isUndefined,undefined,true],
    [isUndefined,1,false],
    [isUndefined,null,false],
    [isDate,new Date(),true],
    [isDate,new Date().getDate(),false],
    [isObject,[1,2],false],
    [isObject,null,false],
    [isObject,{},true],
    [isString,'',true],
    [isString,new String(1),false],
    [isString,1,false],
    [isRegExp,/1/,true,],
  ])('%o(%o)=>%o',(fn,input,expected)=>{
    expect(fn(input)).toEqual(expected)
  })
})
