// * 1186. Maximum Subarray Sum with One Deletion
// Given an array of integers, return the maximum sum for a non-empty subarray (contiguous elements) with at most one element deletion. In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and the sum of the remaining elements is maximum possible.
// Note that the subarray needs to be non-empty after deleting one element.

// Input: arr = [1,-2,0,3]
// Output: 4
// Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.

// Input: arr = [1,-2,-2,3]
// Output: 3
// Explanation: We just choose [3] and it's the maximum sum.

// Input: arr = [-1,-1,-1,-1]
// Output: -1
// Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.

// Constraints:
// 1 <= arr.length <= 105
// -104 <= arr[i] <= 104

// * DP -> time: 27%, space: 27%
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
  // * 權力狀態
  // 0: 未使用 刪除
  // 1: 已使用 刪除
  // 未使用刪除   已使用刪除
  // 未使用刪除   已使用刪除

  // * 初始化
  if (arr.length === 0) return 0;
  let n = arr.length;
  let dp = Array.from({ length: n }, () => [0, 0]);
  dp[0][0] = arr[0];
  dp[0][1] = -Infinity;

  // * DP
  let res = arr[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]);
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i]);
    res = Math.max(res, dp[i][0], dp[i][1]);
  }
  return res;
};

// * 降維 -> time: 90%, space: 90%
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
  // * 權力狀態
  // 0: 未使用 刪除
  // 1: 已使用 刪除

  let n = arr.length;
  let noDel = arr[0]; // 以i結尾，未刪除
  let oneDel = -Infinity; // 以i結尾，已刪除
  let res = arr[0];

  for (let i = 1; i < n; i++) {
    oneDel = Math.max(noDel, oneDel + arr[i]);
    noDel = Math.max(noDel + arr[i], arr[i]);
    res = Math.max(res, noDel, oneDel);
  }
  return res;
};
