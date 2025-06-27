// Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // let dp = new Array(n).fill(0);

  // 可將空間優化
  // dp[1] = 1;
  // dp[2] = 2;
  // * 爬到前前一階（第 i-2 階）的方法數
  let prev1 = 1;
  // * 代表「爬到前一階（第 i-1 階）的方法數」
  let prev2 = 2;

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
};
