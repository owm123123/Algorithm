/**
 * * 416. Partition Equal Subset Sum
 * * 0/1 背包問題
 * * https://www.youtube.com/watch?v=r6I-ikllNDM
 *
 * Given a non-empty array nums containing only positive integers,
 * find if the array can be partitioned into two subsets such that
 * the sum of elements in both subsets is equal.
 *
 * Example 1:
 * Input: nums = [1, 5, 11, 5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *
 * Example 2:
 * Input: nums = [1, 2, 3, 5]
 * Output: false
 * Explanation: The array cannot be partitioned into equal sum subsets.
 *
 * Constraints:
 * - 1 <= nums.length <= 200
 * - 1 <= nums[i] <= 100
 *
 * @param {number[]} nums
 * @return {boolean}
 */

// Write your solution below:

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canPartition(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false;
    let target = sum / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (let n of nums) {
      for (let i = target; i >= n; i--) {
        dp[i] = dp[i] || dp[i - n];
      }
    }
    return dp[target];
  }
}
