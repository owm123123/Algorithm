/*
* LeetCode 300. Longest Increasing Subsequence
* https://www.youtube.com/watch?v=Q6KyDl_xiIg

Given an integer array nums, return the length of the longest strictly increasing subsequence.

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1

Constraints:
- 1 <= nums.length <= 2500
- -10^4 <= nums[i] <= 10^4

// Write your solution below:
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    let res = [];
    for (let n of nums) {
      // * 二分搜尋 res 中第一個 >= x 的位置
      let left = 0;
      let right = res.length;
      while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (res[mid] < n) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      // * left === q.length (n 是 res 裡面最大的數)
      // * 如果不是則替換掉
      if (left === res.length) {
        res.push(n);
      } else {
        res[left] = n;
      }
    }
    return res.length;
  }
}
