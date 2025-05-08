// Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// ---------------------------------------------------------
/* 解題思路 */

/* 貪心演算法 (Greedy Algorithm) */

// 1. 定義一個變數 maxReach，表示目前可以到達的最遠索引。

// 2. 遍歷陣列：
//  如果當前索引 i 超過了 maxReach，說明無法到達該位置，返回 false。
//  更新 maxReach 為 max(maxReach, i + nums[i])。

// 3. 如果遍歷結束時，maxReach 大於或等於最後一個索引，返回 true。

// ---------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
};
