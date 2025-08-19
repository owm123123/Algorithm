/**
 * 45. Jump Game II
 *
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 *
 * Each element in the array represents your maximum jump length at that position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * You can assume that you can always reach the last index.
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - 0 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 2,4,1,1,1,1
  // TODO: Implement your solution here
  // * curr: 當前這一步能跳到的最遠位置
  let curr = 0;
  // * next: 下一步能跳到的最遠位置。
  let next = 0;
  let count = 0;
  // !　最後一格不需要再跳 (< len - 1)
  for (let i = 0; i < nums.length - 1; i++) {
    next = Math.max(next, nums[i] + i);
    if (i === curr) {
      count++;
      curr = next;
    }
  }
  return count;
};
