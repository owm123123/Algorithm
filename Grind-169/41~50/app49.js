// * Partition Equal Subset Sum
// * 網址: https://www.youtube.com/watch?v=r6I-ikllNDM
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // * DP 0/1 背包問題
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  let dp = new Array(sum + 1).fill(false);
  let target = sum / 2;
  dp[0] = 0;
  for (let num of nums) {
    // * 倒序避免重複使用
    // ! 如果是完全背包問題就可以正序
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  return dp[target];
};
