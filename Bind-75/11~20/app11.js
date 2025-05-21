// Combination Sum IV

// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The test cases are generated so that the answer can fit in a 32-bit integer.

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.

// Input: nums = [9], target = 3
// Output: 0

// ----------------------------------------------------------

/**
 *
 * 序列型 dp
 *
 * 1. 設定dp[]範圍: target + 1
 * 3. 初始化 dp[]
 * 2. 找出 dp 公式
 *
 */

// ----------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = new Array(target + 1).fill(0);

  // 初始化，和為 0 時只有一種組合（空集合）
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
};
