// * 215. Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:
// 1 <= k <= nums.length <= 105
// -10^4 <= nums[i] <= 10^4

// * BS
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let left = Math.min(...nums);
  let right = Math.max(...nums) + 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    let count = 0;
    for (let num of nums) {
      if (num >= mid) {
        count++;
      }
    }

    if (count >= k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
};

// * heap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minValue = Math.min(...nums);
  const maxValue = Math.max(...nums);

  const count = new Array(maxValue - minValue + 1).fill(0);

  for (const num of nums) {
    count[num - minValue]++;
  }

  let remaining = k;
  for (let i = count.length - 1; i >= 0; i--) {
    remaining -= count[i];

    if (remaining <= 0) {
      return i + minValue;
    }
  }
};
