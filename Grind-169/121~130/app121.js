// * Largest Number
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.

// Input: nums = [10,2]
// Output: "210"

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums = nums.map(String);
  nums.sort((a, b) => (b + a).localeCompare(a + b));
  let result = nums.join('');
  return result[0] === '0' ? '0' : result;
};
