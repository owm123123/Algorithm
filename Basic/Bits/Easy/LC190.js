/**
 * 190. Reverse Bits
 *
 * Given a 32-bit unsigned integer, reverse its bits and return the result as an unsigned integer.
 *
 * Example 1:
 * Input: n = 00000010100101000001111010011100
 * Output:    964176192 (00111001011110000010100101000000)
 *
 * Example 2:
 * Input: n = 11111111111111111111111111111101
 * Output:   3221225471 (10111111111111111111111111111111)
 *
 * Note:
 * - The input must be treated as an unsigned 32-bit integer.
 * - You may assume that the input is always a valid 32-bit integer.
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - reversed bits as unsigned integer
 */
var reverseBits = function (n) {
  // Write your code here
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) | (n & 1);
    n >>= 1;
  }
  return res >>> 0;
};
