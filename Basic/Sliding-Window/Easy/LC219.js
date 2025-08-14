/*
219. Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Constraints:
- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- 0 <= k <= 10^5
*/

// Write your solution below:
// * Sliding-Windows + Hash
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  // nums=[0,1,2,3,2,5] k=3
  containsNearbyDuplicate(nums, k) {
    // nums[i] == nums[j] && abs(i - j) <= k
    let i = 0;
    // * abs(i - j) <= k: 如果有 < 的話, 需要用 hash 紀錄所有窗口內
    let set = new Set();
    for (let j = 0; j < nums.length; j++) {
      while (Math.abs(j - i) > k) set.delete(nums[i++]);
      if (set.has(nums[j])) {
        return true;
      } else {
        set.add(nums[j]);
      }
    }
    return false;
  }
}
