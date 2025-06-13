// * Combination Sum
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Input: candidates = [2], target = 1
// Output: []

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  /**
   * @param {number} remain // * 還差多少才能湊到 target
   * @param {number[]} path // * 目前組合得內容
   * @param {*} start // * 從哪個 index 開始選
   */
  let backtrack = (remain, path, start) => {
    if (remain === 0) {
      /**
       * ! js 補充
       * ! result.push([...path]); -> 複製一份 arr, 指向 不同的 記憶體
       * ! result.push(path); -> 指向同一個記憶體 path 改變, 他會跟著改變
       */
      result.push([...path]);
      return;
    }
    if (remain < 0) {
      return;
    }
    // [2, 3, 6, 7], 7
    // ! i = start 避免回頭選，解決重複的問題
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      // ! path 共用同一組即可
      backtrack(remain - candidates[i], path, i);
      // * 把 push 的值 pop 出來, 達到 回溯 的效果
      path.pop();
    }
  };
  backtrack(target, [], 0);
  return result;
};
