/**
 * @param customMsg Used when `err.stack` is not defined
 * @returns { Error }
 */
export const parseUnknownError = (customMsg: string) => (e: unknown) => {
  const err = e as Error

  return new Error(err.stack ?? customMsg)
}

export const logger = {
  // default
  log: (...args: any) => console.log(...args),
  // red
  error: (...args: any) => console.log('\x1b[31m%s\x1b[0m', ...args),
  // green
  success: (...args: any) => console.log('\x1b[32m%s\x1b[0m', ...args),
  // yellow
  warning: (...args: any) => console.log('\x1b[33m%s\x1b[0m', ...args),
  // blue
  debug: (...args: any) => console.log('\x1b[34m%s\x1b[0m', ...args),
  // magenta
  infoStrong: (...args: any) => console.log('\x1b[35m%s\x1b[0m', ...args),
  // cyan
  infoWeak: (...args: any) => console.log('\x1b[36m%s\x1b[0m', ...args),
}
