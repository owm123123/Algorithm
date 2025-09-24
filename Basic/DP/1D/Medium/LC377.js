/*
* LeetCode 377. Combination Sum IV
* 排列型完全背包問題
* https://www.youtube.com/watch?v=niZlmOtG4jM

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

Example 1:
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1,1,1,1)
(1,1,2)
(1,2,1)
(1,3)
(2,1,1)
(2,2)
(3,1)

Example 2:
Input: nums = [9], target = 3
Output: 0

Constraints:
- 1 <= nums.length <= 200
- 1 <= nums[i] <= 1000
- All the elements of nums are unique.
- 1 <= target <= 1000

*/

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  combinationSum4(nums, target) {
    // dp[i]：湊出和為 i 的所有可能排列的數量
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1; // 空集合

    for (let i = 1; 1 <= target; i++) {
      for (let n of nums) {
        if (i >= n) {
          dp[i] += dp[i - n];
        }
      }
    }

    return dp[target];
  }
}
