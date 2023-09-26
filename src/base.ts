export function assert(condition: boolean, message: string): asserts condition {
  if (!condition)
    throw new Error(message)
}
export const toString = (v: any) => Object.prototype.toString.call(v)

type TypeName='string'|'number'|'bigint'|'boolean'|'symbol'|'undefined'|'object'|'function'|'array'|'null'|'regexp'|'date'|'error'|'map'|'set'|'promise'
export function getTypeName(v: any):TypeName {
  if (v === null)
    return 'null'
  const type = toString(v).slice(8, -1).toLowerCase()
  return ((typeof v === 'object' || typeof v === 'function') ? type : typeof v) as TypeName
}
