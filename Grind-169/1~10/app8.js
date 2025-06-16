// * Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  // ! 注意 while 規則
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      // // ! 注意需要 - 1
      r = mid - 1;
    } else {
      // ! 注意需要 + 1
      l = mid + 1;
    }
  }

  return -1;
};
