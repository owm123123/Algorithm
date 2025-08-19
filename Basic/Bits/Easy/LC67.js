/**
 * 67. Add Binary
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 * Constraints:
 * - 1 <= a.length, b.length <= 10^4
 * - a and b consist only of '0' or '1' characters.
 * - Each string does not contain leading zeros except for "0" itself.
 */

// Write your solution here:

class Solution {
  /**
   * @param {string} a
   * @param {string} b
   * @return {string}
   */
  addBinary(a, b) {
    let lenA = a.length - 1;
    let lenB = b.length - 1;
    let carry = 0;
    let res = '';

    while (lenA >= 0 || lenB >= 0 || carry > 0) {
      let sum = 0;
      if (lenA >= 0) sum += Number(a[lenA--]);
      if (lenB >= 0) sum += Number(b[lenB--]);
      sum += carry;
      res = (sum % 2) + res;
      carry = Math.floor(sum / 2);
    }
    return res;
  }
}
