/**
 * Return url segments splitting
 * @param {string} url
 * @returns {string[]}
 */
export const getUrlSegments = (url: string) => url.split(".")

/**
 * Return client name located at the first array element
 * @param {string[]} urlSegments
 * @returns {string}
 */
export const getClientName = (urlSegments: string[]) => urlSegments[0]

/**
 * Return client name from a full pathname
 * @example getClientNameFromUrl('clientName.domain.com') // returns'clientName'
 * @param {string} url
 * @returns {string}
 */
export const getClientNameFromUrl = (url: string) =>
  getClientName(getUrlSegments(url))

/**
 * Return 'http' or 'https' depending on current environment
 * @returns {string}
 */
export const getProtocol = () => {
  return import.meta.env.VITE_APP_HTTPS === "true" ? "https" : "http"
}
