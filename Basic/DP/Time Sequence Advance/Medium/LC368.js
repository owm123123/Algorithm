// * 368. Largest Divisible Subset
// Given a set of distinct positive integers nums,
// * return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
// answer[i] % answer[j] == 0, or answer[j] % answer[i] == 0
// * 要求 "子集"，順序可以任意調整。 sort

// If there are multiple solutions, return any of them.

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]

// Constraints:
// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// All the integers in nums are unique.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  // * subset(子集): 不管順序
  nums.sort((a, b) => a - b);
  let n = nums.length;
  // * 紀錄最長 divisible subset
  let dp = new Array(n).fill(1);
  // * 記錄前一個 idx
  let prev = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }

  let res = [];
  let maxLen = Math.max(...dp);
  let maxIdx = dp.indexOf(maxLen);
  while (maxIdx !== -1) {
    res.push(nums[maxIdx]);
    maxIdx = prev[maxIdx];
  }
  return res.reverse();
};
