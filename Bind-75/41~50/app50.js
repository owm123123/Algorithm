//* Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
//-------------------------

//-------------------------
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set(nums);
  if (set.size !== nums.length) {
    return true;
  }
  return false;
};
