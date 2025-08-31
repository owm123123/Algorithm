/*
* LeetCode 50. Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000

Constraints:
- -100.0 < x < 100.0
- -2^31 <= n <= 2^31-1
- n is an integer.
- Either x is not zero or n > 0.

*/

class Solution {
  /**
   * @param {number} x
   * @param {number} n
   * @return {number}
   */
  myPow(x, n) {
    if (n === 0) return 1;
    if (n < 0) {
      x = 1 / x;
      n = -n;
    }
    let res = 1;
    while (n > 0) {
      if (n % 2 === 1) res *= x;
      x *= x;
      n = Math.floor(n / 2);
    }
    return res;
  }
}
