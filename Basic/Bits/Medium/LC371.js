/**
 * 371. Sum of Two Integers
 *
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 *
 * Example 1:
 * Input: a = 1, b = 2
 * Output: 3
 *
 * Example 2:
 * Input: a = 2, b = 3
 * Output: 5
 *
 * Constraints:
 * - -1000 <= a, b <= 1000
 */

// Write your solution here:
/**
 * ! a = 5 (0101), b = 3 (0011)
** 第一次： a = 5, b = 3
    a ^ b = 0110 (6), (a & b) << 1 = 0010 (2)
** 第二次： a = 6, b = 2
    a ^ b = 0100 (4), (a & b) << 1 = 0100 (4)
** 第三次： a = 4, b = 4
    a ^ b = 0000 (0), (a & b) << 1 = 1000 (8)
** 第四次： a = 0, b = 8
    a ^ b = 1000 (8), (a & b) << 1 = 0000 (0)
** b 變成 0，結束，回傳 a = 8
 */
class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  getSum(a, b) {
    // * a ^ b 相加, 但不處理進位
    // * (a & b) << 1 處理進位
    while (b !== 0) {
      let carry = (a & b) << 1;
      a ^= b;
      b = carry;
    }
    return a;
  }
}
