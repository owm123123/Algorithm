/*
* LeetCode 343. Integer Break

Given an integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

Example 1:
Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

Example 2:
Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

Constraints:
- 2 <= n <= 58

*/

class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  integerBreak(n) {
    // dp: 把 i 拆成至少兩個正整數的最大乘積
    let dp = new Array(n + 1).fill(0);
    dp[1] = 0; // 1 不能拆

    // j * (i - j) : 直接拆成 j 和 i - j
    // j * dp[i - j] : 拆成 j 和「i - j 的最大拆分乘積」
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j < i; j++) {
        dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
      }
    }

    return dp[n];
  }
}
