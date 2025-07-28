// * 154. Find Minimum in Rotated Sorted Array II
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:
// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

// You must decrease the overall operation steps as much as possible.

// Input: nums = [1,3,5]
// Output: 1

// Input: nums = [2,2,2,0,1]
// Output: 0

// Constraints:
// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// nums is sorted and rotated between 1 and n times.

// * binary search
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // * nums[mid] == nums[right]
      // * 無法判斷最小值在哪一邊，只能縮小右邊界
      right--;
    }
  }
  return nums[left];
};

// * 分治法
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
