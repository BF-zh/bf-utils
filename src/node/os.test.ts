import { isIPv4, isIPv6 } from 'node:net'
import { describe, expect, it } from 'vitest'
import type { ipsParam } from './os'
import { cpu, ips } from './os'

describe('os', () => {
  it.each<[ipsParam | undefined, (input: string) => boolean, boolean]>([
    [undefined, isIPv4, true],
    [{ IPv4: true }, isIPv4, true],
    [{ IPv4: true, internal: true }, isIPv4, true],
    [{ IPv6: true, IPv4: false }, isIPv6, true],
    [{ IPv6: true, IPv4: true }, input => isIPv4(input) || isIPv6(input), true],
  ])('ips(%o)=>%o(%o)', (input, fn, expected) => {
    ips(input).map(v => expect(fn(v)).toBe(expected))
  })
  it.each([[1,1]])('',()=>{
    cpu.count()
    cpu.average()
  })
})
