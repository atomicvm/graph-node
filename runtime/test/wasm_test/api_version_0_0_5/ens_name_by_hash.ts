export * from './common/global'

declare namespace ens {
    function nameByHash(hash: string): string|null
}

export function nameByHash(hash: string): string|null {
  return ens.nameByHash(hash)
}
