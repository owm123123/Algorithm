// *　33. Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Input: nums = [1], target = 0
// Output: -1

// Constraints:
// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length;

  // [4,5,6,7,0,1,2] target = 0
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // * 判斷正向 處理正向
    if (nums[left] <= nums[mid]) {
      // * nums[left] <= target: 確定在左半區
      // * nums[mid] >= target: lower_bound 規則
      if (nums[left] <= target && nums[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      // * target <= nums[right - 1]: 確定在右半區
      // * nums[mid] < target: lower_bound 規則
      if (target <= nums[right - 1] && nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
  return -1;
};

// * 花花醬 虛擬有序
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // * 核心做法
    let x;
    if (nums[mid] < nums[0] === target < nums[0]) {
      x = nums[mid];
    } else {
      x = target < nums[0] ? -Infinity : Infinity;
    }

    if (x < target) {
      left = mid + 1;
    } else if (x > target) {
      right = mid;
    } else {
      return mid;
    }
  }
  return -1;
};
