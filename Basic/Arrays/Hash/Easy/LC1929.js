/*
LeetCode 1929. Concatenation of Array

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (i.e., the array is concatenated with itself).

Write your solution below:
*/

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  getConcatenation(nums) {
    let res = [];
    for (let n of nums) {
      res.push(n);
    }
    for (let n of nums) {
      res.push(n);
    }
    return res;
  }
}
