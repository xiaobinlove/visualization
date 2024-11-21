interface JsonObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseJson = (str?: any): JsonObject | false => {
  if (!str) {
    return false
  }
  try {
    return JSON.parse(str) as JsonObject
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return false
  }
}
export const getQueryParam = (name: string) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
