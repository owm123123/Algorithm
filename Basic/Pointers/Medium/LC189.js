/*
LeetCode 189. Rotate Array

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Constraints:
- 1 <= nums.length <= 10^5
- -2^31 <= nums[i] <= 2^31 - 1
- 0 <= k <= 10^5

Write your solution below:
*/

// Your code here
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  rotate(nums, k) {
    let n = nums.length;
    k = k % n;
    // 反轉整個陣列
    this.reverse(nums, 0, n - 1);
    // 反轉前 k 個
    this.reverse(nums, 0, k - 1);
    // 反轉前 n-k 個
    this.reverse(nums, k, n - 1);
  }

  reverse(arr, left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
}
