/**
 * @param customMsg Used when `err.stack` is not defined
 * @returns { Error }
 */
export const parseUnknownError = (customMsg: string) => (e: unknown) => {
  const err = e as Error

  return new Error(err.stack ?? customMsg)
}
