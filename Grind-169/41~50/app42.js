// * Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const n = nums.length;
  for (let num of nums) {
    map.set(num, (num.get(num) || 0) + 1);
    if (map.get(num) > Math.floor(n / 2)) return num;
  }
};
