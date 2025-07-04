// * Contiguous Array
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// Input: nums = [0,1,1,1,1,1,0,0,0]
// Output: 6
// Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  // * key: preSum value: startIdx
  let map = new Map();
  map.set(0, -1);
  let maxLen = 0;
  let currSum = 0;
  // * 不能說 Prefix Sum = 0 就是答案
  // * -1 ~ next -1: 數量相等所以抵銷了
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i] === 1 ? 1 : -1;
    if (map.has(currSum)) {
      maxLen = Math.max(maxLen, i - map.get(currSum));
    } else {
      map.set(currSum, i);
    }
  }
  return maxLen;
};
