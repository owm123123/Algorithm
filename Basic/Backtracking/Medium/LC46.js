/*
* 46. Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let used = new Array(nums.length).fill(false);

  let backTrack = (sub) => {
    if (sub.length === nums.length) {
      res.push([...sub]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i] === true) continue;
      used[i] = true;
      sub.push(nums[i]);
      backTrack(sub);
      used[i] = false;
      sub.pop();
    }
  };

  backTrack([]);
  return res;
};
