/*
* 473. Matchsticks to Square

You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Return true if you can make this square and false otherwise.

Example 1:
Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with side length 2, one side of which is made of two sticks of length 1.

Example 2:
Input: matchsticks = [3,3,3,3,4]
Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.
 
Constraints:
1 <= matchsticks.length <= 15
1 <= matchsticks[i] <= 10^8
*/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  let total = matchsticks.reduce((a, b) => a + b, 0);
  if (total % 4 !== 0) return false;

  let side = [0, 0, 0, 0];
  let target = total / 4;

  // 添加排序，從大到小處理 - 優化
  matchsticks.sort((a, b) => b - a);

  // 提早剪枝：如果最大的火柴棒超過target - 優化
  if (matchsticks[0] > target) return false;

  let backTrack = (idx) => {
    // ! 不是 matchsticks.length - 1 (這樣最後一根沒排進去就被驗證了)
    if (idx === matchsticks.length) {
      return side.every((v) => v === target);
    }

    for (let i = 0; i < 4; i++) {
      if (side[i] + matchsticks[idx] > target) continue;
      side[i] = side[i] + matchsticks[idx];
      if (backTrack(idx + 1)) return true;
      side[i] = side[i] - matchsticks[idx];
    }

    return false;
  };

  return backTrack(0);
};
