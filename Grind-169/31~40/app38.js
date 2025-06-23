// * Permutations
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Input: nums = [1]
// Output: [[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];

  // * 算是 backTrack
  let dfs = (path, used) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // * 剪枝
      if (used[i]) continue;
      // * used[i] 用來記錄 nums[i] 是否已經使用過
      used[i] = true;
      path.push(nums[i]);
      dfs(path, used);
      // * 回溯
      path.pop();
      used[i] = false;
    }
  };

  dfs([], []);
  return res;
};
