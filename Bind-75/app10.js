// Search in Rotated Sorted Array

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

// ----------------------------------------------------------
// * keyword *
// 1. Rotated Sorted Array :
// 陣列是經過旋轉的排序陣列。例如，原始陣列 [0, 1, 2, 4, 5, 6, 7] 可能被旋轉成 [4, 5, 6, 7, 0, 1, 2]。
// 旋轉的特性是陣列分為兩個有序部分。

// 旋轉的特性使得陣列分為兩個有序部分，因此你不能直接使用普通的二分搜尋法，而需要根據旋轉的特性來調整搜尋範圍。
// 如果目標值是 0，它位於右半部分 [0, 1, 2]。 如果目標值是 5，它位於左半部分 [4, 5, 6, 7]。

// 2. Return the index of target :
// 如果 target 存在於陣列中，返回它的索引。
// 如果 target 不存在於陣列中，返回 -1。

// 3. O(log n) runtime complexity :
// 這是題目要求的時間複雜度，暗示需要使用 二分搜尋法 (Binary Search)。
// 暴力搜尋（O(n)）不符合要求。

// * learn *

// 旋轉特性的二分搜尋法

// 例子分析
// 例子 1：nums = [4, 5, 6, 7, 0, 1, 2]
// 初始情況：left = 0, right = 6, mid = 3，nums[mid] = 7。
// 判斷：
// nums[left] = 4，nums[mid] = 7。
// 因為 nums[left] <= nums[mid]，所以左半部分 [4, 5, 6, 7] 是有序的。

// 例子 2：nums = [6, 7, 0, 1, 2, 4, 5]
// 初始情況：left = 0, right = 6, mid = 3，nums[mid] = 1。
// 判斷：
// nums[left] = 6，nums[mid] = 1。
// 因為 nums[left] > nums[mid]，所以右半部分 [1, 2, 4, 5] 是有序的。

// ----------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // nums[left] <= nums[mid] 說明 「左半邊」 是「有序」的
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      // 否則說明 「右半邊」 是「有序」的
    } else {
      if (nums[mid] <= target && target < nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
