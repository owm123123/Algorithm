// * Maximum Subarray
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
 * @description // * Kadane's Algorithm: dp 的空間優化
 */
var maxSubArray = function (nums) {
  // * Greedy: 每次遍歷到一個數字 n，決定要不要把前面的和累加下去（如果前面的和 < 0 就丟掉，從 n 重新開始）。

  let max = nums[0];
  // * 當前的和
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // * 檢查是當前數字大, 還是加前面大, 可以說明檢查 curr > 0
    // * 比較「只選當前數」和「累加前面的和」哪個大，決定是否重新開始一段子陣列 (GPT)
    curr = Math.max(nums[i], nums[i] + curr);
    max = Math.max(max, curr);
  }

  return max;
};
