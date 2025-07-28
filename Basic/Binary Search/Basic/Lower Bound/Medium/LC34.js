// * 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

// * lower_bound 找到第一個等於, upper_bound 找到一個大於
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length;

  // lower_bound
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (nums[left] !== target) return [-1, -1];

  let lowerLeft = left;
  left = 0;
  right = nums.length;
  // upper_bound
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return [lowerLeft, left - 1];
};
