/*
LeetCode 53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

// Write your solution below:
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @description // * Kadane's Algorithm: dp 的空間優化
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  // * 當前的和
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // * 可以這樣做是因為搞不好後面的數字很大，大到可以包含前面負的
    curr = Math.max(nums[i], nums[i] + curr);
    max = Math.max(max, curr);
  }

  return max;
};
