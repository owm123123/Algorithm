// * 81. Search in Rotated Sorted Array II
// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

// Constraints:
// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// nums is guaranteed to be rotated at some pivot.
// -104 <= target <= 104

// Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {boolean}
   */
  search(nums, target) {
    let left = 0,
      right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] === target) return true;

      // * 注意左閉右開 nums[right - 1]
      // * 說明
      // * nums = [2,2,2,3,2,2,2]
      // * 當 nums[left] == nums[mid] == nums[right], 只根據 nums[left] <= nums[mid] 無法判斷
      if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
        left++;
        right--;
      }
      // 3 4 5 0 1 2
      else if (nums[mid] <= nums[right]) {
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        if (nums[mid] > target && target >= nums[left]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return false;
  }
}
