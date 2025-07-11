// * Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let res = new Array(n);
  let left = 0;
  let right = n - 1;
  let idx = n - 1;
  while (left <= right) {
    let l2 = nums[left] * nums[left];
    let r2 = nums[right] * nums[right];
    if (l2 > r2) {
      res[idx] = l2;
      left++;
    } else {
      res[idx] = r2;
      right--;
    }
    idx--;
  }
  return res;
};
