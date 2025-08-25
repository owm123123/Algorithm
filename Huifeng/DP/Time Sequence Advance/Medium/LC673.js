// * 673. Number of Longest Increasing Subsequence
// Given an integer array nums, return the number of longest increasing subsequences.
// Notice that the sequence has to be strictly increasing.

// Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

// Input: nums = [2,2,2,2,2]
// Output: 5
// Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.

// Constraints:
// 1 <= nums.length <= 2000
// -106 <= nums[i] <= 106
// The answer is guaranteed to fit inside a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(1);
  let cnt = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // * 相當於 Math.max(dp[j] + 1, dp[i])
        // * 只是因為還要更新 cnt 所以才這樣寫
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          cnt[i] = cnt[j];
        }
        // * cnt: 若干個 dp[j] + 可以接到 dp[i]
        else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j];
        }
      }
    }
  }

  let maxLen = Math.max(...dp);
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] === maxLen) res += cnt[i];
  }
  return res;
};
