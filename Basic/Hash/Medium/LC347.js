/**
 * * 347. Top K Frequent Elements
 * * 解法: sorting & heap & bucket sort
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - k is in the range [1, the number of unique elements in the array]
 * - It is guaranteed that the answer is unique.
 */

// Write your solution here:
// * sorting
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let count = new Map();
    for (let n of nums) {
      count.set(n, (count.get(n) || 0) + 1);
    }

    let sorted = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map((e) => e[0]);
  }
}

// Todo: heap

// * Bucket Sort
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = {};
    // * freq = key 出現次數, 所有數字 (freq[3]: 出現3次的所有數字)
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }
    for (const n in count) {
      freq[count[n]].push(parseInt(n));
    }

    const res = [];
    for (let i = freq.length - 1; i > 0; i--) {
      for (const n of freq[i]) {
        res.push(n);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
}
