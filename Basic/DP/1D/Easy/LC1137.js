/*
* LeetCode 1137. N-th Tribonacci Number

The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 2, T_4 = 4

Example 2:
Input: n = 25
Output: 1389537

Constraints:
- 0 <= n <= 37

*/

class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  tribonacci(n) {
    if (n <= 2) return n === 0 ? 0 : 1;

    let dp = new Array(n + 1).fill(0);

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i < n + 1; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[n];
  }
}
