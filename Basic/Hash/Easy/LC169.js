/**
 * 169. Majority Element
 *
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 5 * 10^4
 * - -10^9 <= nums[i] <= 10^9
 *
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  // Write your code here
  let map = new Map();

  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);

    if (map.get(n) > Math.floor(nums.length / 2)) {
      return n;
    }
  }
  return 0;
}

// *　Boyer-Moore Voting Algorithm
/**
 * * 摩爾投票法
 * 設定一個候選值 res 和計數器 count
 * 遍歷陣列：
 * 如果 count == 0，把當前元素設為候選值
 * 如果元素等於候選值，count++, 否則 count--
 * 最後 res 就是多數元素
 * ! 多數元素出現次數比其他所有元素加起來還多，最後一定能留下來
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  majorityElement(nums) {
    let res = 0,
      count = 0;

    for (let num of nums) {
      if (count === 0) {
        res = num;
      }
      count += num === res ? 1 : -1;
    }
    return res;
  }
}
