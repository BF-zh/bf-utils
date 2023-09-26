import { networkInterfaces, cpus } from 'node:os'

export interface ipsParam {
  IPv4?: boolean
  IPv6?: boolean
  internal?: boolean
}

export function ips(config?: ipsParam) {
  const { IPv4, IPv6, internal } = { IPv4: true, IPv6: false, internal: false, ...config }
  const address: string[] = []
  const ifaces = networkInterfaces()
  for (const iface in ifaces) {
    const ips = ifaces[iface]
    if (!ips)
      continue
    for (const ip of ips) {
      if (ip.internal && !internal)
        continue
      if (ip.family === 'IPv4' && IPv4)
        address.push(ip.address)
      if (ip.family === 'IPv6' && IPv6)
        address.push(ip.address)
    }
  }
  return address
}

export const cpu = {
  count() {
    return cpus().length
  },
  average() {
    let totalIdle = 0
    let totalTick = 0
    let data = cpus()
    let len = data.length
    for (const item of data) {
      Object.values(item.times).reduce((a, b) => totalTick += (a + b), 0)
      totalIdle += item.times.idle
    }
    return {
      totalIdle,
      totalTick,
      avgIdle: (totalIdle / len),
      avgTick: (totalTick / len)
    }
  },
  model() {
    return cpus().map(({ model }) => model)
  }
}
