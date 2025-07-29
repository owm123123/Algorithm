// * 410. Split Array Largest Sum
// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.
// Return the minimized largest sum of the split.
// A subarray is a contiguous part of the array.

// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.

// Input: nums = [1,2,3,4,5], k = 2
// Output: 9
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.

// Constraints:
// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 106
// 1 <= k <= min(50, nums.length)

// * BS
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let left = Math.max(...nums);
  let right = nums.reduce((a, b) => a + b, 0);

  function check(limit) {
    let count = 1,
      sum = 0;
    for (let num of nums) {
      if (sum + num > limit) {
        count++;
        sum = 0;
      }
      sum += num;
    }
    return count <= k;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

// * 記憶化遞迴(DP) - 自頂向下
// * dp[i][j] = Min(Max(dp[i-1][k], sums(k+1, j))), dp[0][j] = sum(0, j)
// * time: O(mn2), space: O(mn)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  const n = nums.length;

  // * 前i個數的前墜和
  const sums = Array(n).fill(0);
  sums[0] = nums[0];
  for (let i = 1; i < n; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }

  // * 記憶化 - 每一段滿足 Min(Max(dp[i-1][k], sums(k+1, j))) 最佳解
  // * memo[i][j]：記錄「前 i+1 個數分成 j 段」時，所有分法中最大子陣列和的最小值。
  // * memo[4][2]：代表 nums[0..4]（共 5 個數）分成 2 段時，最小的最大子陣列和。
  let memo = Array.from({ length: n }, () => Array(k + 1).fill(Infinity));

  // * 遞迴地枚舉所有分割點
  // * end: 目前考慮到的結尾 index
  let split = (end, k) => {
    if (k === 1) return sums[end];
    if (k > end + 1) return Infinity;
    if (memo[end][k] !== Infinity) return memo[end][k];
    let ans = Infinity;
    for (let i = 0; i < end; i++) {
      ans = Math.min(ans, Math.max(split(i, k - 1), sums[end] - sums[i]));
    }
    memo[end][k] = ans;
    return ans;
  };

  return split(n - 1, k);
};
