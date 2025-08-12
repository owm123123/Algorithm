/**
 * 201. Bitwise AND of Numbers Range
 *
 * Given two integers left and right that represent the range [left, right],
 * return the bitwise AND of all numbers in this range, inclusive.
 *
 * Example 1:
 * Input: left = 5, right = 7
 * Output: 4
 *
 * Example 2:
 * Input: left = 0, right = 0
 * Output: 0
 *
 * Example 3:
 * Input: left = 1, right = 2147483647
 * Output: 0
 *
 * Constraints:
 * - 0 <= left <= right <= 2^31 - 1
 */

/**
* * 以 left = 5, right = 7 為例：
  5: 101
  6: 110
  7: 111

  右移直到相等：
  5,7 → 2,3 (shift=1)
  2,3 → 1,1 (shift=2)
  
  共同前綴是 1，左移 2 位：1 << 2 = 4
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  // TODO: Implement your solution here
  let shift = 0;

  // * 找出共同前綴
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return right << shift;
};
