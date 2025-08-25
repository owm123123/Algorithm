// 918. Maximum Sum Circular Subarray

// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

// A circular array means the end of the array connects to the beginning of the array.
// Formally, the next element of nums[n - 1] is nums[0], and the previous element of nums[0] is nums[n - 1].

// A subarray may only include each element of the fixed buffer nums at most once.
// (Formally, there could be two indices i and j such that 0 <= i <= j < n and the subarray starts at i and ends at j,
// or the subarray starts at j and ends at i.)

// Example 1:
// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.

// Example 2:
// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 10.

// Example 3:
// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.

// Constraints:
// - n == nums.length
// - 1 <= n <= 3 * 10^4
// - -3 * 10^4 <= nums[i] <= 3 * 10^4

// Write your solution below:
class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubarraySumCircular(nums) {
    let total = 0;
    let max = nums[0],
      maxCurr = nums[0];
    let min = nums[0],
      minCurr = nums[0];

    for (let i = 0; i < nums.length; i++) {
      let n = nums[i];
      total += n;

      maxCurr = i === 0 ? n : Math.max(maxCurr + n, n);
      max = Math.max(max, maxCurr);

      minCurr = i === 0 ? n : Math.min(minCurr + n, n);
      min = Math.min(min, minCurr);
    }

    // 全為負數時，total - min 會是 0，不合法
    if (max < 0) return max;
    return Math.max(max, total - min);
  }
}
