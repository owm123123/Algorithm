// * Maximum Product Subarray
// Given an integer array nums, find a subarray that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:
// 1 <= nums.length <= 2 * 104
// ! -10 <= nums[i] <= 10 (有負數)
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let min = nums[0];
  let max = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    // * 以當前 nums[i] 結尾的最大/最小乘積
    max = Math.max(nums[i], nums[i] * temp, nums[i] * min);
    min = Math.min(nums[i], nums[i] * temp, nums[i] * min);
    // * 這裡才是所以最大乘積
    result = Math.max(result, max);
  }

  return result;
};
