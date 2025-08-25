/**
 * * 3133. Minimum Array End
 *
 * You are given two integers n and x.
 *
 * You want to construct an array arr of length n such that:
 * - The bitwise AND of all elements in arr is equal to x.
 * - All elements in arr are non-negative integers.
 *
 * Find the minimum possible value of the last element in arr (i.e., arr[n - 1]) among all possible arrays that satisfy the above conditions.
 *
 * Example 1:
 * Input: n = 3, x = 4
 * Output: 6
 * Explanation: One possible array is [4, 0, 6]. The bitwise AND of all elements is 4, and the last element is 6.
 * * 0100
 * * 0011
 * *
 *
 * Example 2:
 * Input: n = 1, x = 7
 * Output: 7
 * Explanation: The only possible array is [7].
 *
 * Constraints:
 * - 1 <= n <= 10^9
 * - 0 <= x < 2^31
 */

// Write your solution here:
class Solution {
  /**
   * @param {number} n
   * @param {number} x
   * @return {number}
   */
  minEnd(n, x) {
    let res = BigInt(x);
    let i_x = 1n;
    let i_n = 1n;
    n = BigInt(n - 1);

    while (i_n <= n) {
      if ((i_x & res) === 0n) {
        if ((i_n & n) !== 0n) {
          res = res | i_x;
        }
        i_n = i_n << 1n;
      }
      i_x = i_x << 1n;
    }

    return Number(res);
  }
}
