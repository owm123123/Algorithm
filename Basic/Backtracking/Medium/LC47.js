/**
 * * 47. Permutations II
 *
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 *
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: [[1,1,2],[1,2,1],[2,1,1]]
 *
 * Example 2:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Constraints:
 * - 1 <= nums.length <= 8
 * - -10 <= nums[i] <= 10
 */

// Write your solution here:

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  permuteUnique(nums) {
    let res = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);
    // ! 紀錄 idx，不是 value
    let visited = new Array(len).fill(false);

    let backTrack = (path) => {
      if (path.length === len) {
        res.push([...path]);
        return;
      }
      for (let i = 0; i < len; i++) {
        if (visited[i]) continue;
        // ! !visited[i]: 跳過"重新開始"的重複元素
        if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
        path.push(path);
        visited[i] = true;
        backTrack(path);
        path.pop();
        visited[i] = false;
      }
    };
    backTrack([]);
    return res;
  }
}
