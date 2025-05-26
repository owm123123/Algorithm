// * Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
//-------------------------
/**
 * ! without using the division operation: 不可以使用除法
 * ! answer[i] is equal to the product of all the elements of nums except nums[i]
 * ! answer[i] 是所有樹的乘積 除了本身
 * ! product: 乘積， except nums[i]: 除了自己
 */
//-------------------------

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// i:1  left:2
// 左積 [1, 1, 2, 6]

// i:3 right:8
// 右積 [   , 8, 6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  // * 左積右積 可以不用額外處理 0 or 負數 的問題

  // 左積
  let left = 1;
  for (let i = 0; i < n; i++) {
    result[i] = left;
    left *= nums[i];
  }

  // 右積
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
};
