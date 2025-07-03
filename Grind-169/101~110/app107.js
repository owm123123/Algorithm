// * Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Input: nums = [1,1,1], k = 2
// Output: 2

// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:
// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000 // ! 有負數
// -107 <= k <= 107

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  /**
   * ! 重點1
   * * map 紀錄 key:前綴和 val:出現的次數
   * * 代表「從頭到這個位置的總和」
   * * 所以可以確保 subArray
   * ! 重點2
   * * 因為有 負數, 所以 前綴和 會出現多次
   * * 因為有負數 所以不能用 two pointer (無法正確移動 left)
   */

  let map = new Map();
  map.set(0, 1); // 前綴和, 出現的次數
  let sum = 0;
  let count = 0;
  for (let n of nums) {
    sum += n;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
