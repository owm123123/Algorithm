/*
* LeetCode 279. Perfect Squares
* https://medium.com/ho-japan/leetcode%E9%A1%8C%E8%A7%A3-2-%E5%8B%95%E6%85%8B%E8%A6%8F%E5%8A%83-dynamic-programming-279-perfect-squares-b257be1170cc

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

Example 1:
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Example 2:
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

Constraints:
- 1 <= n <= 10^4

*/

// * 完全背包
class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  numSquares(n) {
    // dp: 組成 i 所需的最少平方數數量
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    // * 思路: n=13，dp[13] 可能是
    // * dp[12] + 1 || dp[9] + 1 || dp[4] + 1
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }

    return dp[n];
  }
}
