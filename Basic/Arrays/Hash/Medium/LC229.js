/*
LeetCode 229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

You may assume the given array is non-empty and the majority element always exist in the array.

Example 1:
Input: nums = [3,2,3]
Output: [3]

Example 2:
Input: nums = [1]
Output: [1]

Example 3:
Input: nums = [1,2]
Output: [1,2]

Constraints:
- 1 <= nums.length <= 5 * 10^4
- -10^9 <= nums[i] <= 10^9

Follow up: Could you solve the problem in linear time and in O(1) space?

// Write your solution below:
*/

// * Hash
class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  majorityElement(nums) {
    let target = Math.floor(nums.length / 3) + 1;
    let map = new Map();
    let res = [];

    for (let n of nums) {
      if (res.includes(n)) {
        continue;
      }
      if (!map.has(n)) {
        map.set(n, 0);
      }
      map.set(n, map.get(n) + 1);
      if (map.get(n) >= target) {
        res.push(n);
      }
    }
    return res;
  }
}

// *　Todo: 比摩爾投票法(Boyer-Moore Voting Algorithm)
