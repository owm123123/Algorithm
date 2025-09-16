/*
* 40. Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]

Constraints:
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
*/

/*
* [1,1,1,4] 階層說明
第一層（i=0）:
├─ j=0: 選 1 (第1個1) ✓ 允許
├─ j=1: 選 1 (第2個1) ✗ 跳過 (j>i && candidates[1]==candidates[0])
├─ j=2: 選 1 (第3個1) ✗ 跳過 (j>i && candidates[2]==candidates[1])
└─ j=3: 選 4 ✓ 允許

第二層（i=1，已選第1個1）:
├─ j=1: 選 1 (第2個1) ✓ 允許 (j=i，不跳過)
├─ j=2: 選 1 (第3個1) ✗ 跳過
└─ j=3: 選 4 ✓ 允許
*/

class Solution {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum2(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);

    let backTrack = (start, sub, sum) => {
      if (sum > target) return;
      if (sum === target) {
        res.push([...sub]);
        return;
      }

      for (let i = start; i < candidates.length; i++) {
        // * i > start: 不是當前層的第一個元素
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        sub.push(candidates[i]);
        backTrack(i + 1, sub, sum + candidates[i]);
        sub.pop();
      }
    };

    backTrack(0, [], 0);
    return res;
  }
}
