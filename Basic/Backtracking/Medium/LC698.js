/*
* 698. Partition to K Equal Sum Subsets

Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:
Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

Example 2:
Input: nums = [1,2,3,4], k = 3
Output: false

Constraints:
1 <= k <= nums.length <= 16
1 <= nums[i] <= 10^4
The frequency of each element is in the range [1, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  let total = nums.reduce((a, b) => a + b, 0);
  if (total % k !== 0) return false;

  let side = new Array(k).fill(0);
  let target = total / k;

  nums.sort((a, b) => b - a);
  if (nums[0] > target) return false;

  let backTrack = (idx) => {
    if (idx === nums.length) {
      return side.every((v) => v === target);
    }

    for (let i = 0; i < k; i++) {
      // * 如果當前子集和前一個子集相同，跳過 - 優化
      if (i > 0 && side[i] === side[i - 1]) continue;

      if (side[i] + nums[idx] > target) continue;
      side[i] += nums[idx];
      if (backTrack(idx + 1)) return true;
      side[i] -= nums[idx];

      // * 如果元素連第一個空子集都放不進去，後面的空子集也放不進去 - 優化
      if (side[i] === 0) return false;
    }

    return false;
  };

  return backTrack(0);

  return backTrack(0);
};
