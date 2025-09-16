/*
* 47. Permutations II

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Constraints:
1 <= nums.length <= 8
-10 <= nums[i] <= 10
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let used = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);

  let backTrack = (sub) => {
    if (sub.length === nums.length) {
      res.push([...sub]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 跳過已使用的元素
      if (used[i]) continue;

      // * 去重：如果當前元素等於前一個元素，且前一個元素未被使用，則跳過
      // 這樣確保相同元素按照索引順序使用，避免重複排列
      if (i !== 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue;

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
