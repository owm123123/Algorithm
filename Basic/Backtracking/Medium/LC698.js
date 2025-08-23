/**
 * * LeetCode 698. Partition to K Equal Sum Subsets
 *
 * Given an array of integers nums and a positive integer k,
 * find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.
 *
 * Example 1:
 * Input: nums = [4,3,2,3,5,2,1], k = 4
 * Output: true
 * Explanation: It's possible to divide it into 4 subsets (5), (1,4), (2,3), (2,3) with equal sum.
 *
 * Example 2:
 * Input: nums = [1,2,3,4], k = 3
 * Output: false
 *
 * Constraints:
 * - 1 <= k <= nums.length <= 16
 * - 0 <= nums[i] <= 10000
 * - The frequency of each element is at most 4.
 */

// Write your solution here:
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  canPartitionKSubsets(nums, k) {
    let sum = nums.reduce((a, b) => a + b, 0);
    if (sum % k !== 0) return false;
    let target = sum / k;
    nums.sort((a, b) => b - a);
    let sides = new Array(k).fill(0);

    let backTrack = (idx) => {
      if (idx === nums.length) {
        return sides.every((s) => s === target);
      }
      for (let i = 0; i < k; i++) {
        if (sides[i] + nums[idx] > target) continue;
        sides[i] += nums[idx];
        if (backTrack(idx + 1)) return true;
        sides[i] -= nums[idx];
        // * 優化
        if (sides[i] === 0) break;
      }
      return false;
    };

    return backTrack(0);
  }
}
