/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const keyValuePairs = Object.entries(obj);
  const filteredKeyValuePairs = keyValuePairs.filter(pair => !fields.includes(pair[0]));
  return Object.fromEntries(filteredKeyValuePairs);
};
