/*
* LeetCode 334. Increasing Triplet Subsequence

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exist, return false.

Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k will satisfy nums[i] < nums[j] < nums[k].

Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No increasing triplet exists.

Example 3:
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (1, 4, 6) satisfies the conditions.

Constraints:
- 1 <= nums.length <= 5 * 10^5
- -2^31 <= nums[i] <= 2^31 - 1
*/

// * Greedy
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let n of nums) {
    if (n <= first) {
      first = n;
    } else if (n <= second) {
      second = n;
    } else {
      return true;
    }
  }

  return false;
};
