// 918. Maximum Sum Circular Subarray
class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubarraySumCircular(nums) {
    let total = 0;
    let max = nums[0];
    let maxCurr = nums[0];

    let min = nums[0];
    let minCurr = nums[0];

    for (let n of nums) {
      total += n;
      maxCurr = Math.max(maxCurr + n, n);
      max = Math.max(max, maxCurr);
      minCurr = Math.min(minCurr + n, n);
      min = Math.min(min, minCurr);
    }
    if (max < 0) return max;
    return Math.max(max, total - min);
  }
}
