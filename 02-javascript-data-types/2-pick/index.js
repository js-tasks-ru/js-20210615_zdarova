/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const keyValuePairs = Object.entries(obj);
  const filteredKeyValuePairs = keyValuePairs.filter(pair => fields.includes(pair[0]));
  return Object.fromEntries(filteredKeyValuePairs);
};
