/*
* 213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [2,3,2]
Output: 3

Example 2:
Input: nums = [1,2,3,1]
Output: 4

Constraints:
- 1 <= nums.length <= 100
- 0 <= nums[i] <= 1000

*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    let len = nums.length;
    if (len === 0) return 0;
    if (len === 1) return nums[0];
    // 偷第一間
    let dp1 = new Array(len).fill(0);
    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len - 1; i++) {
      dp1[i] = Math.max(dp1[i - 1], nums[i] + dp1[i - 2]);
    }

    // 偷最後一間
    let dp2 = new Array(len).fill(0);
    dp2[0] = 0;
    dp2[1] = nums[1];
    for (let i = 2; i < len; i++) {
      dp2[i] = Math.max(dp2[i - 1], nums[i] + dp2[i - 2]);
    }

    return Math.max(dp1[len - 2], dp2[len - 1]);
  }
}
