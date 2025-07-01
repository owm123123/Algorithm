// * Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and using only constant extra space.

// Input: nums = [1,3,4,2,2]
// Output: 2

// Input: nums = [3,1,3,4,2]
// Output: 3

// Input: nums = [3,3,3,3,3]
// Output: 3

// Constraints:
// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

/**
 * @param {number[]} nums
 * @return {number}
 * @description // * 快慢指針(Floyd's Tortoise and Hare)
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // * 找環的入口: 確保回傳是第一個
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
