/**
 * 168. Excel Sheet Column Title
 *
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 * For example:
 *   1 -> "A"
 *   2 -> "B"
 *   26 -> "Z"
 *   27 -> "AA"
 *   28 -> "AB"
 *
 * Example 1:
 * Input: columnNumber = 1
 * Output: "A"
 *
 * Example 2:
 * Input: columnNumber = 28
 * Output: "AB"
 *
 * Example 3:
 * Input: columnNumber = 701
 * Output: "ZY"
 *
 * Constraints:
 * - 1 <= columnNumber <= 2^31 - 1
 */

// * time: O(logn), space: O(1)
// Write your solution here:
function convertToTitle(columnNumber) {
  // TODO: Implement this function
  let res = '';
  while (columnNumber > 0) {
    columnNumber--;
    res = String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt(0)) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
}
