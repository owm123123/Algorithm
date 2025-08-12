/*
268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2

Example 2:
Input: nums = [0,1]
Output: 2

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8

Constraints:
- n == nums.length
- 1 <= n <= 10^4
- 0 <= nums[i] <= n
- All the numbers of nums are unique.

Write your solution below:
*/

// Solution:
class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

  // 0 1 2  1 2 3
  missingNumber(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      res ^= i;
      res ^= nums[i];
    }
    return (res ^= nums.length);
  }
}
