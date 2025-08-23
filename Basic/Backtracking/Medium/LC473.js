/**
 * 473. Matchsticks to Square
 *
 * You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick.
 * You want to use all the matchsticks to make one square. You should not break any stick, but you can
 * link them up, and each matchstick must be used exactly one time.
 *
 * Return true if you can make this square and false otherwise.
 *
 * Example 1:
 * Input: matchsticks = [1,1,2,2,2]
 * Output: true
 * Explanation: You can form a square with length 2, each side will be 2.
 *
 * Example 2:
 * Input: matchsticks = [3,3,3,3,4]
 * Output: false
 *
 * Constraints:
 * - 1 <= matchsticks.length <= 15
 * - 1 <= matchsticks[i] <= 10^8
 */

class Solution {
  /**
   * @param {number[]} matchsticks
   * @return {boolean}
   */
  makesquare(matchsticks) {
    let total = matchsticks.reduce((a, b) => a + b, 0);
    if (total % 4 !== 0) return false;
    let sides = [0, 0, 0, 0];
    let target = total / 4;

    // * 由大到小排序可以優化 剪枝
    matchsticks.sort((a, b) => b - a);

    let backTrack = (idx) => {
      if (idx === matchsticks.length) {
        return sides.every((s) => s === target);
      }

      for (let i = 0; i < 4; i++) {
        if (sides[i] + matchsticks[idx] > target) continue;
        sides[i] += matchsticks[idx];
        if (backTrack(idx + 1)) return true;
        sides[i] -= matchsticks[idx];
      }

      return false;
    };

    return backTrack(0);
  }
}
