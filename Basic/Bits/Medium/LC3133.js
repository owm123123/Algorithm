/*
* LeetCode 3133. Minimum Array End

Given two integers n and x, you are given an array a of length n where a[0] = x. For each i (1 <= i < n), you can choose any integer a[i] such that a[i] >= 0.

You are allowed to choose the values of a[1], a[2], ..., a[n-1] in any way you like.

Let S be the bitwise OR of all elements in the array a.

Find the minimum possible value of a[n-1] such that S is minimized.

Constraints:
- 1 <= n <= 10^9
- 0 <= x < 2^31

Example 1:
Input: n = 3, x = 5
Output: 0

Example 2:
Input: n = 1, x = 7
Output: 7
*/

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
