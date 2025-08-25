/**
 * 152. Maximum Product Subarray
 *
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 *
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * Example 1:
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 * Example 2:
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 *
 * Constraints:
 * - 1 <= nums.length <= 2 * 10^4
 * - -10 <= nums[i] <= 10
 * - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */

// Write your solution here:

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxProduct(nums) {
    let max = nums[0];
    let dp = Array.from({ length: nums.length }, () => Array(2).fill(0));
    dp[0][0] = nums[0];
    dp[0][1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      // max
      dp[i][0] = Math.max(
        nums[i],
        dp[i - 1][0] * nums[i],
        dp[i - 1][1] * nums[i]
      );
      dp[i][1] = Math.min(
        nums[i],
        dp[i - 1][0] * nums[i],
        dp[i - 1][1] * nums[i]
      );
      max = Math.max(dp[i][0], max);
    }
    return max;
  }
}
