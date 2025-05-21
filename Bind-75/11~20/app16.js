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
/* 貪心演算法 (Greedy Algorithm) */

/* 核心思想 */

// 1. 局部最優解：
//  每一步都選擇當前看起來最好的選擇，而不考慮全局的情況。
//  例如，在這題中，每次都嘗試跳到當前能到達的最遠位置。

// 2. 全局最優解：
//  如果問題具有 貪心選擇性質，即局部最優解一定是全局最優解的一部分，那麼貪婪演算法就能正確解決問題。
//  在這題中，通過不斷更新能到達的最遠位置，最終可以判斷是否能到達最後一個索引。

// 3.不回溯：
//  貪婪演算法不會回溯或重新考慮之前的選擇，這使得它的實現通常非常高效。

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
