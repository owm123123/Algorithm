/**
 * LeetCode 40. Combination Sum II
 *
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 * Example 1:
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output:
 * [
 *   [1,1,6],
 *   [1,2,5],
 *   [1,7],
 *   [2,6]
 * ]
 *
 * Example 2:
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output:
 * [
 *   [1,2,2],
 *   [5]
 * ]
 *
 * Constraints:
 * - 1 <= candidates.length <= 100
 * - 1 <= candidates[i] <= 50
 * - 1 <= target <= 30
 */

// Write your solution here:
class Solution {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);

    let backTrack = (i, sub, sum) => {
      if (sum > target) return;
      if (sum === target) {
        res.push([...sub]);
        return;
      }

      for (let j = i; j < candidates.length; j++) {
        if (j > i && candidates[j] === candidates[j - 1]) continue;
        sub.push(candidates[j]);
        backTrack(j + 1, sub, sum + candidates[j]);
        sub.pop();
      }
    };

    backTrack(0, [], 0);
    return res;
  }
}
