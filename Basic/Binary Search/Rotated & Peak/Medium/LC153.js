// * 153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

// Constraints:
// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length; // 左閉右開

  while (left < right - 1) {
    // 保證 left+1 == right 時結束
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right - 1]) {
      right = mid + 1; // 最小值在左半區（包含 mid）
    } else {
      left = mid; // 最小值在右半區
    }
  }
  return nums[left];
};

// * 花花醬
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let find = (arr, l, r) => {
    if (l == r) return arr[l];
    if (arr[l] < arr[r]) return arr[l];
    let mid = Math.floor((l + r) / 2);
    return Math.min(find(arr, l, mid), find(arr, mid + 1, r));
  };
  return find(nums, 0, nums.length - 1);
};
