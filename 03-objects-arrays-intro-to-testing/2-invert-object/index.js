/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj === undefined) {
    return undefined;
  }
  const pairs = Object.entries(obj);
  for (const pair of pairs) {
    pair.reverse();
  }
  return Object.fromEntries(pairs);
}
