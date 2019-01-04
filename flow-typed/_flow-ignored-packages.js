declare module 'polished' {
  declare module.exports: any
}

declare module 'offline-plugin/runtime' {
  declare module.exports: {
    install: () => void,
  }
}
