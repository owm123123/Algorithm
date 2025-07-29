// * 287. Find the Duplicate Number
// * https://www.youtube.com/watch?v=9kVttLi3_iw
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

// [1, 2, 2, 3, 4, 5]
// 3

// ! BS (效率較差) O(nlogn)
// * range [1, n] 因為範圍, 所以可以用 BS
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let left = 1;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    let count = 0;
    for (let num of nums) {
      if (num <= mid) {
        count++;
      }
    }

    // * 找第一個滿足 count > mid 的數值 (upper_bound)
    if (count > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// * fast-slow (效率較高) O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (fast !== slow);

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
