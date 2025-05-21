// Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let temp = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (temp < 0) {
      temp = 0;
    }
    temp = temp + nums[i];
    max = Math.max(temp, max);
  }

  return max;
};
