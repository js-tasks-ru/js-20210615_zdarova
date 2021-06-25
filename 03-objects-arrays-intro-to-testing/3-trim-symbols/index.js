/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const charsArr = string.split('');
  let charsInARow = 1;

  for (let i = 0; i < charsArr.length - 1; i++) {

    if (size === undefined) {
      return string;
    } else if (size === 0) {
      return '';
    }

    if (charsArr[i].toLowerCase() !== charsArr[i - 1]?.toLowerCase()) {
      charsInARow = 1;
    }

    if (charsInARow > size && (charsArr[i].toLowerCase() !== charsArr[i + 1]?.toLowerCase())) {
      charsInARow = 1;
    }
    if (charsArr[i].toLowerCase() === charsArr[i + 1].toLowerCase()) {
      charsInARow++;
      if (charsInARow > size) {
        charsArr.splice(i + 1, 1);
        i--;
      }
    }

  }

  return charsArr.join('');
}

