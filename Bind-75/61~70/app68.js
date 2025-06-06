// * Counting Bits
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
/**
 * ! 以5為範例，要拆成10, 1
 * ! 10 = dp[2] = dp[5 >> 1] + (5 & 1)
 * ! 所以公式: dp[i] = dp[i >> 1] + (i & 1)
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let dp = [];
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }
  return dp;
};
